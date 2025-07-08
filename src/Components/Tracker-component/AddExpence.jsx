import { useEffect, useState } from "react"

export function AddExpence({userData, setUserData}) {

    const [expenceName, setExpenceName] = useState("");
    const [expenceAmount, setExpenceAmount] = useState("");

    const addExpence = (event) =>{
        event.preventDefault();
        console.log(expenceName);
        console.log(expenceAmount);
        
        const newExpence = {
            exName : expenceName,
            exAmount : expenceAmount,
        };

        const updateExpence = [
            ...(userData.expences || []),
            newExpence
        ];

        const updateData = {
            ...userData,
            expences : updateExpence
        };

        setUserData(updateData);
    }
    return(
        <main className="w-auto h-auto flex flex-col gap-5">
            <h1 className="text-lg font-extralight text-center">Add Your Expence</h1>
            <form className="flex flex-col items-center gap-4"
            onSubmit={addExpence}
            >
                <input type="text" placeholder="Enter expence"
                 className="border p-1.5 text-md" 
                 onChange={(e)=> setExpenceName(e.target.value)}
                 required
                 />
                <input type="number"  placeholder="Enter expence amount"
                 className="border p-1.5 text-md"
                 onChange={(e)=> setExpenceAmount(e.target.value)}
                 required
                 />
                 <button
                    className="w-fit border p-2.5 text-lg font-semibold rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                >Add</button>
            </form>

           <div className="overflow-y-auto max-h-[180px] border rounded w-full p-2">
                <ul className="list-decimal p-1.5 overflow-y-scroll max-h-[150px] w-auto">
                    <li>Hello</li>
                </ul>
           </div>
        </main>
    )
}