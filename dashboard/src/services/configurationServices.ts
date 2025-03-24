import { apiClient } from "./apiClient"

export const getConfigurations = async() =>{
    const api = await apiClient();
    const response = await api.get("configuration/all");
    return response;
}
export const addConfiguration = async(name:string, description: string, componentKey: string)=>{
    const api = await apiClient();
    const response = await api.post("configuration/add",{name,description, componentKey});
    return response;
}
export const updateConfiguration = async(id:number, name:string, description: string, componentKey: string)=>{
    const api = await apiClient();
    const response = await api.put("configuration/update",{id,name, description,componentKey});
    return response;
}
export const getConfigurationById = async(id:number)=>{
    const api = await apiClient();
    const response = await api.get(`configuration/getById?id=${id}`);
    return response;
}
export const deleteConfigurationById = async(id:number)=>{
    const api = await apiClient();
    const response = await api.delete(`configuration/deleteById?id=${id}`);
    return response;
}