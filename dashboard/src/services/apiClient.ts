import { getToken } from "@/lib/tokenManager";
import axios from "axios";
const HOST_API = process.env.NEXT_PUBLIC_HOST || "http://localhost:3001/";
export const apiClient = async () =>{
    const token = getToken();
    const instance = axios.create({
        baseURL: HOST_API,
        headers: {
            "Content-Type": "application/json",
        },
    });
    instance.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
    
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return instance; 
}