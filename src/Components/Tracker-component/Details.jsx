export function Details() {
    const userData = JSON.parse(localStorage.getItem("user-data"));

    return (
        <main className="w-full h-fit flex flex-col gap-5">

            <div id="user-name" className="flex  items-center text-xl gap-5 text-left">
                <i className="fa-solid fa-user text-2xl"></i>
                <h1 id="name" className="">{userData.user}</h1>
            </div>

            <div id="balance-con" className="flex justify-center items-center border p-5">
                <div id="balance">
                    <div id="amount" className="flex flex-col items-center gap-3">
                        <h1 className="text-6xl font-semibold">{userData.balance}</h1>
                        <h2 className="text-sm text-green-500">Your Balance</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}