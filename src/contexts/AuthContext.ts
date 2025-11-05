//funciona como uma memoria global para a autenticação do usuário
import { createContext } from "react";

import type { UserType } from "../types/UserType";

export interface AuthContextType {
    user: UserType | null;
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);
