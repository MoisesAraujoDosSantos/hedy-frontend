import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { Sidebar } from "./Sidebar";
export interface PrivateRouteProps {
    children: ReactElement;
}


export const PrivateRoute = () => {
    const { user } = useAuth();
    
    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <main className="flex-1 ml-80 overflow-auto">
                
                <Outlet />
            </main>
        </div>)
};