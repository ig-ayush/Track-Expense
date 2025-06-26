import { Route, Routes,Navigate } from "react-router-dom"
import Login from "./Components/Login"
import Tracker from "./Components/Tracker"
import { useEffect, useState } from "react";

function App() {

    const userP = JSON.parse(localStorage.getItem("user-data"));
    
  return (
    <Routes>
      <Route
        path="/"
        element={userP ? <Navigate to="/tracker" /> : <Login />}
      />
      <Route
        path="/tracker"
        element={userP ? <Tracker /> : <Navigate to="/" />}
      />
    </Routes>
  )
}

export default App
