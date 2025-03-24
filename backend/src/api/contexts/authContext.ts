import { User } from "../domain/models/User";

const authContext = new Map<string,User>();

export const setAuthUser = (token:string, user: User) =>{
    authContext.set(token, user);
}
export const getAuthUser = (token:string) =>{
    return authContext.get(token);
}
export const clearAuthUser = (token: string) => {
    authContext.delete(token);
};