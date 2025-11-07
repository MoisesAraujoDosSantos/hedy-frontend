// import { useEffect, useState } from "react"
// import { getHome } from "./services/UserService"
import { BrowserRouter } from "react-router-dom"
import { Directions } from "./routes"
import { AuthProvider } from "./providers/AuthProvider"


function App() {



  return (
    <BrowserRouter>
      <AuthProvider>
        <Directions />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
