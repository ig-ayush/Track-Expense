import { useNavigate } from "react-router-dom";

export function Details({ setUserP, userData, setUserData }) {
    
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user-data");
       setUserP(false);
       navigate("/")
    }
    return (
        <main className="w-full h-fit flex flex-col gap-3 sm:gap-5">

            <div id="user-name-logout" className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-lg sm:text-xl gap-3 sm:gap-5 text-left">
                <section className="flex items-center gap-2 sm:gap-3">
                    <i className="fa-solid fa-user text-xl sm:text-2xl"></i>
                    <h1 id="name" className="text-base sm:text-lg md:text-xl truncate">{userData.user}</h1>
                </section>
                <button id="logout-btn" className="text-right p-2 sm:p-2 w-full sm:w-[80px] text-sm sm:text-base rounded-lg bg-red-600 hover:bg-red-800 transition-colors duration-300 cursor-pointer font-semibold text-white"
                onClick={logout}
                >
                    Logout
                </button>
            </div>
            <div id="balance-con" className="flex justify-center items-center border p-3 sm:p-5 rounded-lg">
                <div id="balance">
                    <div id="amount" className="flex flex-col items-center gap-2 sm:gap-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold break-all">₹{userData.balance}</h1>
                        <h2 className="text-xs sm:text-sm text-green-500 text-center">Your Balance</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}