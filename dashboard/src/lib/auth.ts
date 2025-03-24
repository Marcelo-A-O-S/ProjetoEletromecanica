import { jwtVerify } from "jose";

interface Payload {
    name: string;
    email: string;
    role: string;
}
const HOST_API = process.env.NEXT_PUBLIC_HOST || "http://localhost:3001/";
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "default_secret_change_this_in_development"
);
async function verifyToken(token: string): Promise<Payload | null> {
    try {
        const decoded = await jwtVerify(token, JWT_SECRET) as { payload: Payload };
        return decoded.payload;
    } catch (error) {
        console.error('Token inválido:', (error as Error).message);
        return null;
    }
}
async function autenticateUser(email: string, password: string): Promise<string | null> {
    try {
        const response = await fetch(HOST_API + "auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.body) {
            return null
        }
        if(response.status == 401 || response.status == 500){
            const dataResponse = await response.json();
            console.log("Error: ", dataResponse);
            return null;
        }
        const token = await response.json();
        if (!token) {
            return null;
        }
        return token;

    } catch (error) {
        console.error('Falha na autenticação:', (error as Error).message);
        return null;
    }
}
async function registerUser(name:string,email: string, password:string ): Promise<string | null>{
    try{
        const response = await fetch(HOST_API + "/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        });
        if (!response.body) {
            return null
        }
        if(response.status == 401 || response.status == 500){
            const dataResponse = await response.json();
            console.log("Error: ", dataResponse);
            return null;
        }
        const token = await response.json();
        if (!token) {
            return null;
        }
        return token;

    }catch(error){
        console.error('Falha no registro:', (error as Error).message);
        return null;
    }
}

export {
    autenticateUser,
    verifyToken,
    registerUser,

}