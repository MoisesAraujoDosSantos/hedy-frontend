import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Auth/Login";


export const Directions = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/auth/login" element={<Login/>}/>
                
                <Route index element={
                    <PrivateRoute>
                    <Home />
                    </PrivateRoute>  }
                    />

            </Route>
        </Routes>
    )
}