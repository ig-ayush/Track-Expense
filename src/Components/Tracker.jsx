import { Details } from "./Tracker-component/Details";
import { EditBalance  } from "./Tracker-component/EditBalance";
import { AddExpence } from "./Tracker-component/AddExpence";
import { TotalExp } from "./Tracker-component/TotalExp";
import { useEffect, useState } from "react";

function Tracker({ setUserP }) {

    const [choises, setChoises] = useState("");
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user-data"))
    )

    useEffect(()=>{
        localStorage.setItem("user-data", JSON.stringify(userData));
    },[userData]);
    
    function diaplayChoies() {

        switch(choises) {
            case "Edit-Balance" :
                return <EditBalance userData={userData} setUserData={setUserData} />
            case "Add-Expence" :
                return <AddExpence userData={userData} setUserData={setUserData} />
            case "Total-Expence" :
                return <TotalExp userData={userData} />
            default : 
            return null;
        }        
    }
    return(
        <main className="w-screen h-screen flex justify-center items-center p-4">
            <div id="container" className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl max-h-[90vh] border rounded-2xl flex flex-col items-center p-4 sm:p-6 md:p-8 gap-3 overflow-y-auto shadow-lg">
                
                <Details setUserP={ setUserP } userData={userData} setUserData={setUserData}/>                

            <div id="choises" className="mt-4 sm:mt-6 md:mt-8 w-full h-fit">
                <ul className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <li className="flex-1">
                        <button className={`cursor-pointer w-full p-3 sm:p-2 text-sm sm:text-base rounded-lg border transition-all duration-200 ${
                            choises === "Edit-Balance" 
                                ? "bg-blue-500 text-white border-blue-500" 
                                : "bg-transparent hover:bg-gray-100 border-gray-300"
                        }`}
                        onClick={()=> setChoises("Edit-Balance")}
                        >
                        Edit Balance
                        </button>
                    </li>
                    <li className="flex-1">
                        <button className={`cursor-pointer w-full p-3 sm:p-2 text-sm sm:text-base rounded-lg border transition-all duration-200 ${
                            choises === "Add-Expence" 
                                ? "bg-blue-500 text-white border-blue-500" 
                                : "bg-transparent hover:bg-gray-100 border-gray-300"
                        }`}
                        onClick={()=> setChoises("Add-Expence")}
                        >
                        Add Expence
                        </button>
                    </li>
                    <li className="flex-1">
                        <button className={`cursor-pointer w-full p-3 sm:p-2 text-sm sm:text-base rounded-lg border transition-all duration-200 ${
                            choises === "Total-Expence" 
                                ? "bg-blue-500 text-white border-blue-500" 
                                : "bg-transparent hover:bg-gray-100 border-gray-300"
                        }`}
                        onClick={()=> setChoises("Total-Expence")}
                        >
                        Total Expence
                        </button>
                    </li>
                </ul>
            </div>

            <div id="display-comp" className="w-full h-fit m-2 sm:m-5">
                {diaplayChoies()}
            </div>
            </div>
        </main>
    )
}

export default Tracker;