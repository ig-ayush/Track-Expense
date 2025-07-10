import { useState } from "react";

export function EditBalance({userData, setUserData}) {
    const [showForm, setShowForm] = useState("");
    const [addBal, setAddBal] = useState("");
    const [editBal, setEditBal] = useState("");
    
      const addingBalance = (event) =>{
        event.preventDefault();
        if(!isNaN(addBal) && addBal > 0) {

            const update = {
                ...userData,
                balance :  userData.balance + Number(addBal)
            }
            setUserData(update);
            setAddBal("");
            alert("amount added");
        } else {
            alert("Enter valid amount");
        }
    }
    
    const editingBalance = (event) =>{
        event.preventDefault();
        if(!isNaN(editBal) && editBal > 0) {
    
            const update = {
                ...userData,
                balance :  Number(editBal)
            }
            setUserData(update);
            setEditBal("");
            alert("amount Edited");
        } else {
            alert("Enter valid amount");
        }
    }

    return (
        <main className="w-auto h-auto flex flex-col justify-center items-center">
            <h1 className="text-center m-3 sm:m-5 font-semibold text-lg sm:text-xl">Edit your balance</h1>
            <div id="btns" className="flex flex-col sm:flex-row gap-3 sm:gap-8 p-2 w-full max-w-md" data-aos="fade-left" data-aos-duration="1500">
                <button id="add-balance"
                 className={`min-w-[120px] border p-3 rounded-lg transition-all duration-300 ${
                    showForm === "add" 
                        ? "bg-blue-500 text-white border-blue-500 font-semibold" 
                        : "bg-transparent hover:bg-gray-100 hover:font-semibold border-gray-300"
                 }`}
                 onClick={()=> setShowForm("add")}
                 >Add Balance
                 </button>
                <button id="edit-balance"
                 className={`min-w-[120px] border p-3 rounded-lg transition-all duration-300 ${
                    showForm === "edit" 
                        ? "bg-blue-500 text-white border-blue-500 font-semibold" 
                        : "bg-transparent hover:bg-gray-100 hover:font-semibold border-gray-300"
                 }`}
                 onClick={()=>  setShowForm("edit")}
                 >
                    Edit Balance
                </button>
            </div>
            <div id="forms" className="m-3 sm:m-7 w-full max-w-sm">

               { showForm == "add" && <div id="add-balance" className="w-full h-max"
               data-aos = "fade-left" data-aos-duration = "1500">
                    <form className="flex flex-col items-center gap-4 sm:gap-5"
                    onSubmit={addingBalance}
                    >
                        <input type="number" className="border p-2 sm:p-1.5 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter amount to add"
                        value={addBal}
                        onChange={(e) => setAddBal(e.target.value)}
                        required
                        />
                        <button
                         className="w-full border p-3 text-base sm:text-lg font-semibold rounded-lg bg-transparent hover:bg-gray-100 hover:font-semibold transition-all duration-300"
                          >Add</button>
                    </form>
                </div>}

              {  showForm == "edit" && <div id="edit-balance" className="w-full h-max"
              data-aos = "fade-right" data-aos-duration = "1500">
                    <form className="flex flex-col items-center gap-4 sm:gap-5"
                    onSubmit={editingBalance}>
                        <input type="number" className="border p-2 sm:p-1.5 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new balance"
                        value={editBal}
                        onChange={(e)=> setEditBal(e.target.value)}
                        required
                        />
                        <button
                         className="w-full border p-3 text-base sm:text-lg font-semibold rounded-lg bg-transparent hover:bg-gray-100 hover:font-semibold transition-all duration-300"
                          >Edit</button>
                    </form>
                </div>}
            </div>
        </main>
    )
};