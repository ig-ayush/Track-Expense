import { Details } from "./Tracker-component/Details";

function Tracker({ setUserP }) {

    return(
        <main className=" w-screen h-screen flex justify-center items-center">
            <div id="container" className="relative  w-[60ch] h-[90vh] border rounded-2xl flex flex-col items-center p-8">
                <Details />                
            </div>
        </main>
    )
}

export default Tracker;