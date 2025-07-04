import { Details } from "./Tracker-component/Details";

function Tracker({ setUserP }) {

    return(
        <main className=" w-screen h-screen flex justify-center items-center">
            <div id="container" className="relative  w-[60ch] h-[90vh] border rounded-2xl flex flex-col items-center p-8 gap-3">
                
                <Details setUserP={ setUserP }/>                

            <div id="choises" className="mt-8 w-full h-fit">
                <ul className="flex justify-between ">
                    <li className="">
                        <button className="">
                        Edit Balance
                        </button>
                    </li>
                    <li className="">
                        <button className="">
                        Add Expence
                        </button>
                    </li>
                    <li className="">
                        <button className="">
                        Total Expence
                        </button>
                    </li>
                </ul>
            </div>
            </div>
        </main>
    )
}

export default Tracker;