
import { loginUser } from "../services/UserService";
import { useState } from "react";
import type { ReactNode } from "react";
import type { UserType } from "../types/UserType";
import { AuthContext } from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // função pra login
    const login = async (username: string, password: string): Promise<void> => {
        const response = await loginUser(username, password);
        
        //loginuser retorna o jwt com os dados do usuario
        if (!response) return;
        const jwtToken = response;
        const jwtDecoded: { id: number, name: string, role: string } = jwtDecode(jwtToken);
        const user = {
            id: jwtDecoded.id,
            name: jwtDecoded.name,
            role: jwtDecoded.role,
        };
        setUser(user);
        setToken(jwtToken.token);
        return;
    } 
    

    const logout = (): void => {
        setUser(null);
        setToken(null);
    }

    return (<>
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    </>
    )
}


