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
        <main className="w-full h-auto p-5 flex justify-center items-center ">
            <div id="display-con" className="w-[70%] h-auto border-3 border-red-600 
            rounded-xl flex flex-col items-center justify-center gap-5 p-10 text-6xl font-semibold hover:border-red-700">
                <h1>₹ {totalEx}</h1>
                <h2 className="text-lg text-red-700">Total Expences</h2>
            </div>
        </main>
    )
}