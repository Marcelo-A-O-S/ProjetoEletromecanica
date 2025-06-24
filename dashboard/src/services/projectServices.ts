import { apiClient } from "./apiClient"

export const getProjects= async()=>{
    const api = await apiClient();
    const response = await api.get("project/all");
    return response;
}
export const addProject = async(name: string, description: string) =>{
    const api = await apiClient();
    const response = await api.post("project/save",{
        name, description
    });
    return response;
}
export const updateProject = async (id:number,name:string, description: string)=>{
    const api = await apiClient();
    const response = await api.put("project/update",{
        id,name,description
    });
    return response;
}
export const getProjectById = async(id:number)=>{
    const api = await apiClient();
    const response = await api.get(`project/get-by-id?id=${id}`);
    return response;
}
export const deleteProjectById = async(id:number)=>{
    const api = await apiClient();
    const response = await api.delete(`project/delete-by-id?id=${id}`);
    return response;
}