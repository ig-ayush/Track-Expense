import { useEffect, useState } from "react"

export function TotalExp({ userData }) {
    const [totalEx, setTotalEx] = useState(0);

   useEffect(()=>{
    const sumExp = (userData.expences || []).reduce((sum, item) => {
        return sum + Number(item.exAmount)
    },0)

    setTotalEx(sumExp);
   },[userData.expences])

    return (
        <main className="w-full h-auto p-3 sm:p-5 flex justify-center items-center">
            <div id="display-con" className="w-full max-w-sm sm:max-w-md h-auto border-2 sm:border-3 border-red-600 
            rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-5 p-6 sm:p-10 hover:border-red-700 transition-colors duration-300">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold break-all text-center">₹ {totalEx}</h1>
                <h2 className="text-sm sm:text-base md:text-lg text-red-700 text-center">Total Expences</h2>
            </div>
        </main>
    )
}