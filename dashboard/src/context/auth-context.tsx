"use client"
import { useRouter } from "next/navigation";
import { stringify } from "querystring";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
interface User {
    name: string,
    email: string,
    role: 'admin' | 'user' | 'operator'
}
interface AuthContextType {
    user: User | null,
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("/api/auth/me",{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if(response.ok){
                    const userData = await response.json();
                    setUser(userData.user);
                }
            } catch (error) {
                console.log("Verificação de autenticação retornou uma falha:", error);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, [])
    const login = async (email: string, password: string): Promise<boolean> => {
        try{
            setLoading(true);
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                return false;
            }
            const data = await response.json();
            setUser(data.user);
            return true;
        }catch(error){
            console.error("Erro ao acessar:", error);
            return false;
        }finally{   
            setLoading(false);
        }
    }
    const register = async (name: string, email: string, password: string): Promise<boolean> => {
        try{
            setLoading(true);
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });
            if (!response.ok) {
                return false;
            }
    
            const data = await response.json();
            setUser(data.user);
            return true;
        }catch(error){
            console.error("Erro ao registrar usuário", error);
            return false;
        }finally{
            setLoading(false);
        }
    }
    const logout = async () => {
        try{
            const response = await fetch("/api/auth/logout", {
                method: "POST"
            });
            setUser(null);
            router.push("/auth/login");
        }catch(error){
            console.error("Erro ao deslogar:", error);
        }
    }
    return (
        <>
            <AuthContext value={{user, login, register, logout}}>
                {children}
            </AuthContext>
        </>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(context == undefined){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}