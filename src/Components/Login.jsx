import { useState } from "react";

function Login({ setUserP }) {

    const [user,setUser] = useState("");
    const [balance,setBalance] = useState("");

    
    const EnterBtn = (event) =>{
        event.preventDefault();

        if(balance < 50) {
            alert("Your balance have to atlest 50");
        } else {
            const userData =  {
                user :user,
                balance : parseFloat(balance)
            };
            
            localStorage.setItem("user-data",JSON.stringify(userData));
            setUserP(true);
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center p-4">
            <div id="container" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto min-h-[400px] p-6 sm:p-8 rounded-xl border flex flex-col items-center gap-4 sm:gap-6 shadow-lg">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-tight">Manage Your Expence Easily Here!!</h1>
                <form id="login-info"
                 className="flex flex-col gap-4 sm:gap-5 items-center justify-center w-full"
                 onSubmit={EnterBtn}
                >
                    <h2 className="underline text-lg sm:text-xl"> Details</h2>

                    <input type="text"
                     placeholder="Enter your name"
                     className="border p-3 sm:p-2 rounded text-base sm:text-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500" 
                     value={user} 
                     onChange={(e) => setUser(e.target.value)}
                     required
                    />

                    <input type="number" 
                     placeholder="Enter your Balance" 
                     className="border p-3 sm:p-2 rounded text-base sm:text-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                     value={balance}
                     onChange={(e) => setBalance(e.target.value)}
                     required
                     />

                    <button 
                     type="submit"
                     className="text-base sm:text-lg bg-white text-black w-full max-w-xs p-3 sm:p-2 rounded-lg font-semibold group cursor-pointer hover:bg-gray-100 transition-colors duration-200 border border-gray-300"
                     >
                        Enter &nbsp;
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition-all ease-in-out duration-200"></i>
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Login;