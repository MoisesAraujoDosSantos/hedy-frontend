import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Auth/Login";


export const Directions = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="home" element={<Home />} />

            </Route>
        </Routes>
    )
}