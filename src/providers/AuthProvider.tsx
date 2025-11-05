
import { loginUser } from "../services/UserService";
import { useState } from "react";
import type { ReactNode } from "react";
import type { UserType } from "../types/UserType";
import { AuthContext } from "../contexts/AuthContext";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [token, setToken] = useState<string | null>(null);

// função pra login
const login = async (username: string, password: string): Promise<void> => {
    const response = await loginUser(username, password);
    if(!response) return;
    setUser(response.user);
    setToken(response.token);
    return;
}

const logout = (): void => {
    setUser(null);
    setToken(null);
}

return (
    <AuthContext.Provider value= {{user, token, login, logout}}>{children}</AuthContext.Provider>
)
}


