import { apiClient } from "./apiClient";

export const getUsersServices = async () =>{
    const api = await apiClient()
    const response = await api.get('users/all');
    return response;
}
export const updateUserService = async () =>{

}