import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
export interface PrivateRouteProps {
    children: ReactElement;
}


export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const  {user} = useAuth();

    if (!user) {
        return <Navigate to="/auth/login" />;
    }
    return <>{children}</>
};