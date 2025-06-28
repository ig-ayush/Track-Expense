function Tracker({ setUserP }) {

    const logout = ()=>{
        localStorage.removeItem("user-data");
        setUserP(false);
    }
    return(
        <main>
        <h1>Tracker</h1>
        
        <button onClick={logout}>Log Out</button>
        </main>
    )
}

export default Tracker;