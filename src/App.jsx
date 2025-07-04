import { Route, Routes,useNavigate } from "react-router-dom"
import Login from "./Components/Login"
import Tracker from "./Components/Tracker"
import { useEffect, useState } from "react";

function App() {

    const [userP,setUserP] = useState(!!localStorage.getItem("user-data"));
    const navigate = useNavigate();

    useEffect(()=>{
      if(userP) {
        navigate('/tracker');
      } else {
        navigate('/');
      }
    }, [userP]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login setUserP={ setUserP } />}
      />
      <Route
        path="/tracker"
        element={userP ? <Tracker setUserP={ setUserP }/> : <Login setUserP={ setUserP }/>}
      />
    </Routes>
  )
}

export default App
