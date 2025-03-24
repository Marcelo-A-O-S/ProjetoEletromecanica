import { JoystickWebSocketConfiguration } from "@/domain/models/JoystickWebsocketConfiguration";
import { apiClient } from "./apiClient"
import { IDataConfiguration } from "@/domain/interfaces/IDataConfiguration";

export const saveJoystickWebsocketConfiguration = async (body: JoystickWebSocketConfiguration ) =>{
    const api = await apiClient();
    const response  = await api.post("dataConfiguration/add",body);
    return response;
}
export const addDataConfiguration = async(componentKey: string,dataConfiguration: IDataConfiguration) => {
    const api = await apiClient();
    const response = await api.post("dataConfiguration/add", {componentKey,dataConfiguration});
    return response
}
export const updateDataConfiguration = async(componentKey: string, dataConfiguration: IDataConfiguration) =>{
    const api = await apiClient();
    const response = await api.put("dataConfiguration/update", {componentKey,dataConfiguration});
    return response
}