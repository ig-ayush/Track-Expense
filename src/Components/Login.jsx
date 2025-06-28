import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUserP }) {

    const [user,setUser] = useState("");
    const [balance,setBalance] = useState("");

    const navigate = useNavigate();
    
    const EnterBtn = (event) =>{
        event.preventDefault();

        const userData =  {
            user :user,
            balance : parseFloat(balance)
        };

        localStorage.setItem("user-data",JSON.stringify(userData));
        console.log(user);
        console.log(balance);
        setUserP(true);
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center ">
            <div id="container" className="w-1/3 h-1/2 p-8 rounded-xl border flex flex-col  items-center gap-6">
                <h1 className="text-3xl font-bold text-center">Manage Your Expence Easily Here!!</h1>
                <form id="login-info"
                 className="flex flex-col gap-5 items-center justify-center"
                 onSubmit={EnterBtn}
                >
                    <h2 className="underline"> Details</h2>

                    <input type="text"
                     placeholder="Enter your name"
                     className="border p-2 rounded text-lg " 
                     value={user} 
                     onChange={(e) => setUser(e.target.value)}
                     required
                    />

                    <input type="number" 
                     placeholder="Enter your Balance" 
                     className="border p-2 rounded text-lg "
                     value={balance}
                     onChange={(e) => setBalance(e.target.value)}
                     required
                     />

                    <button 
                     type="submit"
                     className="text-lg bg-white text-black w-25 p-2 rounded-lg font-semibold group cursor-pointer"
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