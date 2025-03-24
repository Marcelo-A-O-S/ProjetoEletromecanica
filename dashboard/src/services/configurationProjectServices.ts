import { apiClient } from "./apiClient";

export const getConfigurationProject= async(projectId:number)=>{
    const api = await apiClient();
    const response = await api.get(`configurationProject/getByProjectId?projectId=${projectId}`);
    return response;
}
export const addConfigurationProject = async(projectId: number, configurationId: number, description:string)=>{
    const api = await apiClient();
    const response = await api.post(`configurationProject/add`,{projectId,configurationId,description});
    return response;
}