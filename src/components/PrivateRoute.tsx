import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
export interface PrivateRouteProps {
    children: ReactElement;
}


export const PrivateRoute = () => {
    const  {user} = useAuth();

    if (!user) {
        return <Navigate to="/auth/login" />;
    }
    console.log("user autenticado:", user);
    return user ? <Outlet /> : <Navigate to="/auth/login" />;
};