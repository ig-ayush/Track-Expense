import {  useState } from "react"

export function AddExpence({userData, setUserData}) {

    const [expenceName, setExpenceName] = useState("");
    const [expenceAmount, setExpenceAmount] = useState("");

 
    const addExpence = (event) =>{
        event.preventDefault();
        console.log(expenceName);
        console.log(expenceAmount);
        
        if(expenceAmount > 0) {

            const newExpence = {
                id: Date.now(),
                exName : expenceName.trim(),
                exAmount : expenceAmount,
            };
            
            const updateExpence = [
                ...(userData.expences || []),
                newExpence
            ];
            const presentBal = userData.balance - Number(expenceAmount);
            if(presentBal < 50) {
                alert("If u add this Expence your balance will be low");
            }else {

                const updateData = {
                    ...userData,
                    balance: userData.balance - Number(expenceAmount),
                    expences : updateExpence
                };
                
                setUserData(updateData);
            }
        } else {
            alert("Enter valid amount")
        }
    }

    const deleteExpence = (expence) =>{
        const filterItem = userData.expences.filter((exp) => exp.id !== expence)
        setUserData({
            ...userData,
            expences : filterItem
        })
    }

    return(
        <main className="w-full h-auto flex flex-col gap-5">
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

           <div className="overflow-y-auto max-h-[180px] border rounded w-[300px] p-2  ">
                <ul className="list-decimal p-1.5 overflow-y-scroll max-h-[150px] w-full flex flex-col gap-5">
                    {   
                        userData.expences && userData.expences.length > 0 ? (
                        
                            userData.expences.map((expence,index)=>(
                            <li className="flex justify-between text-xl font-extralight p-1" key={index}>
                                <span>{expence.exName}</span>
                                <span>₹{expence.exAmount}</span>
                                <span className="text-red-600 hover:text-red-500 cursor-pointer"
                                onClick={() => deleteExpence(expence.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </span>
                         </li>
                        ))
                        ) : (
                            <h1>No Items</h1>
                        )
                    }
                </ul>
           </div>
        </main>
    )
}