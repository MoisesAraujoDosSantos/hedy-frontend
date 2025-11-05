import { useEffect, useState } from "react"
import { getHome } from "./services/UserService"
import { Outlet } from "react-router-dom"


function App() {
 


  return (
    <main>
      <Outlet />
    </main>
  )
}

export default App
