export function EditBalance() {
    return (
        <main className="w-auto h-auto">
            <h1 className="text-center m-5 font-semibold text-xl">Edit your balance</h1>
            <div id="btns" className="flex gap-8 p-2">
                <button id="add-balance"
                 className="min-w-[120px] border p-3 rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                 >Add Balance
                 </button>
                <button id="edit-balance"
                 className="min-w-[120px] border p-3 rounded-lg bg-transparent hover:font-semibold transition-all duration-300"
                 >
                    Edit Balance
                </button>
            </div>
        </main>
    )
};