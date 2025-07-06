import { useState } from "react";

export function EditBalance() {
    const userData = JSON.parse(localStorage.getItem("user-data"));
    const [showForm, setShowForm] = useState("");
    const [addBal, setAddBal] = useState(null);
    const [editBal, setEditBal] = useState(null);
    
    const addingBalance = (event) =>{
        event.preventDefault();
        console.log(first)
    }

    const editingBalance = () =>{

    }

    return (
        <main className="w-auto h-auto flex flex-col justify-center items-center">
            <h1 className="text-center m-5 font-semibold text-xl">Edit your balance</h1>
            <div id="btns" className="flex gap-8 p-2" data-aos="fade-left" data-aos-duration="1500">
                <button id="add-balance"
                 className="min-w-[120px] border p-3 rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                 onClick={()=> setShowForm("add")}
                 >Add Balance
                 </button>
                <button id="edit-balance"
                 className="min-w-[120px] border p-3 rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                 onClick={()=>  setShowForm("edit")}
                 >
                    Edit Balance
                </button>
            </div>
            <div id="forms" className="m-7">

               { showForm == "add" && <div id="add-balance" className="w-max h-max"
               data-aos = "fade-left" data-aos-duration = "1500">
                    <form className="flex flex-col items-center gap-5 "
                    onSubmit={addingBalance}
                    >
                        <input type="number" className="border p-1.5" />
                        <button
                         className="w-fit border p-3 text-lg font-semibold rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                          >Add</button>
                    </form>
                </div>}

              {  showForm == "edit" && <div id="edit-balance" className="w-max h-max"
              data-aos = "fade-right" data-aos-duration = "1500">
                    <form className="flex flex-col items-center gap-5 ">
                        <input type="number" className="border p-1.5" />
                        <button
                         className="w-fit border p-3 text-lg font-semibold rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                          >Edit</button>
                    </form>
                </div>}
            </div>
        </main>
    )
};