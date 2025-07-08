export function AddExpence() {
    return(
        <main className="w-auto h-auto flex flex-col gap-5">
            <h1 className="text-lg font-extralight text-center">Add Your Expence</h1>
            <form className="flex flex-col items-center gap-4">
                <input type="text" placeholder="Enter expence"
                 className="border p-1.5 text-md" />
                <input type="number"  placeholder="Enter expence amount"
                 className="border p-1.5 text-md"/>
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