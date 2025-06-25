import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import Tracker from "./Components/Tracker"

function App() {

  return (
    <Routes>
      <Route path="/"  element={<Login/>}/>
      <Route path="/tracker" element={<Tracker />}/>
    </Routes>
  )
}

export default App
