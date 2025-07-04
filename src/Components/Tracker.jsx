import { Details } from "./Tracker-component/Details";
import { EditBalance  } from "./Tracker-component/EditBalance";
import { AddExpence } from "./Tracker-component/AddExpence";
import { TotalExp } from "./Tracker-component/TotalExp";
import { useState } from "react";

function Tracker({ setUserP }) {

    const [choises, setChoises] = useState("");

    function diaplayChoies() {

        switch(choises) {
            case "Edit-Balance" :
                return <EditBalance />
            case "Add-Expence" :
                return <AddExpence />
            case "Total-Expence" :
                return <TotalExp />
            default : 
            return null;
        }        
    }
    return(
        <main className=" w-screen h-screen flex justify-center items-center">
            <div id="container" className="relative  w-[60ch] h-[90vh] border rounded-2xl flex flex-col items-center p-8 gap-3">
                
                <Details setUserP={ setUserP }/>                

            <div id="choises" className="mt-8 w-full h-fit">
                <ul className="flex justify-between ">
                    <li className="">
                        <button className="cursor-pointer"
                        onClick={()=> setChoises("Edit-Balance")}
                        >
                        Edit Balance
                        </button>
                    </li>
                    <li className="">
                        <button className="cursor-pointer"
                        onClick={()=> setChoises("Add-Expence")}
                        >
                        Add Expence
                        </button>
                    </li>
                    <li className="">
                        <button className="cursor-pointer"
                        onClick={()=> setChoises("Total-Expence")}
                        >
                        Total Expence
                        </button>
                    </li>
                </ul>
            </div>

            <div id="display-comp" className="w-auto h-fit m-5">
                {diaplayChoies()}
            </div>
            </div>
        </main>
    )
}

export default Tracker;