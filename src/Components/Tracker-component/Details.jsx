export function Details() {
    const userData = JSON.parse(localStorage.getItem("user-data"));

    return (
        <main className="w-full h-fit p-10">
            <div id="user-name" className="flex justify-center items-center absolute left-[15px] text-xl gap-5">
                <i className="fa-solid fa-user text-2xl"></i>
                <h1 id="name" className="">{userData.user}</h1>
            </div>
               <hr className="border-t border w-full my-4" />
        </main>
    )
}