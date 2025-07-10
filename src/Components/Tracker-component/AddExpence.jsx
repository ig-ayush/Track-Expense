import {  useState } from "react"
import { useAlert } from "../AlertProvider";

export function AddExpence({userData, setUserData}) {

    const [expenceName, setExpenceName] = useState("");
    const [expenceAmount, setExpenceAmount] = useState("");
    const { showAlert } = useAlert();

 
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
                showAlert("If u add this Expence your balance will be low");
            }else {

                const updateData = {
                    ...userData,
                    balance: userData.balance - Number(expenceAmount),
                    expences : updateExpence
                };
                
                setUserData(updateData);
                setExpenceName("");
                setExpenceAmount("");
            }
        } else {
            showAlert("Enter valid amount")
        }
    }

    const deleteExpence = (expence) =>{
        const filterItem = userData.expences.filter((exp) => exp.id !== expence)
        const deletedExpense = userData.expences.find((exp) => exp.id === expence);
        setUserData({
            ...userData,
            balance: userData.balance + Number(deletedExpense.exAmount),
            expences : filterItem
        })
    }

    return(
        <main className="w-full h-auto flex flex-col items-center gap-3 sm:gap-5">
            <h1 className="text-base sm:text-lg font-extralight text-center">Add Your Expence</h1>
            <form className="flex flex-col items-center gap-3 sm:gap-4 w-full"
            onSubmit={addExpence}
            >
                <input type="text" placeholder="Enter expence"
                 className="border p-2 sm:p-1.5 text-sm sm:text-md w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" 
                 value={expenceName}
                 onChange={(e)=> setExpenceName(e.target.value)}
                 required
                 />
                <input type="number"  placeholder="Enter expence amount"
                 className="border p-2 sm:p-1.5 text-sm sm:text-md w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                 value={expenceAmount}
                 onChange={(e)=> setExpenceAmount(e.target.value)}
                 required
                 />
                 <button
                    className="w-full max-w-xs border p-3 sm:p-2.5 text-base sm:text-lg font-semibold rounded-lg bg-transparent hover:bg-gray-100 hover:font-semibold transition-all duration-300"
                >Add</button>
            </form>

           <div className="overflow-y-auto max-h-[150px] sm:max-h-[180px] border rounded w-full max-w-sm sm:max-w-md p-2">
                <ul className="list-decimal p-1.5 overflow-y-scroll max-h-[120px] sm:max-h-[150px] w-full flex flex-col gap-3 sm:gap-5">
                    {   
                        userData.expences && userData.expences.length > 0 ? (
                        
                            userData.expences.map((expence,index)=>(
                            <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-xl font-extralight p-1 gap-1 sm:gap-0" key={index}>
                                <span className="truncate flex-1 pr-2">{expence.exName}</span>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-sm sm:text-base">₹{expence.exAmount}</span>
                                    <span className="text-red-600 hover:text-red-500 cursor-pointer text-base sm:text-lg"
                                    onClick={() => deleteExpence(expence.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </span>
                                </div>
                         </li>
                        ))
                        ) : (
                            <h1 className="text-center text-sm sm:text-base">No Items</h1>
                        )
                    }
                </ul>
           </div>
        </main>
    )
}