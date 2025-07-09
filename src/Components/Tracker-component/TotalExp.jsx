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
        <main>
            <h1>{totalEx}</h1>
        </main>
    )
}