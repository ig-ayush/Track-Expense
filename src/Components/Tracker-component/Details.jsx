import { useNavigate } from "react-router-dom";

export function Details({ setUserP, userData, setUserData }) {
    
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user-data");
       setUserP(false);
       navigate("/")
    }
    return (
        <main className="w-full h-fit flex flex-col gap-5">

            <div id="user-name-logout" className="flex  items-center justify-between text-xl gap-5 text-left">
                <section className="flex items-center gap-3">
                    <i className="fa-solid fa-user text-2xl"></i>
                    <h1 id="name" className="">{userData.user}</h1>
                </section>
                <button id="logout-btn" className="text-right p-2 w-[80px] rounded-lg bg-red-600 hover:bg-red-800 transition-colors duration-300 cursor-pointer font-semibold"
                onClick={logout}
                >
                    Logout
                </button>
            </div>
            <div id="balance-con" className="flex justify-center items-center border p-5">
                <div id="balance">
                    <div id="amount" className="flex flex-col items-center gap-3">
                        <h1 className="text-6xl font-semibold">₹{userData.balance}</h1>
                        <h2 className="text-sm text-green-500">Your Balance</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}