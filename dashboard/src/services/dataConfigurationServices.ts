import { JoystickWebsocketConfiguration } from "@/domain/models/JoystickWebsocketConfiguration";
import { apiClient } from "./apiClient"
import { IDataConfiguration } from "@/domain/interfaces/IDataConfiguration";
import { SwitchWebsocketConfiguration } from "@/domain/models/SwitchWebsocketConfiguration";

export const saveJoystickWebsocketConfiguration = async (body: JoystickWebsocketConfiguration ) =>{
    const api = await apiClient();
    const response  = await api.post("dataConfiguration/save",body);
    return response;
}
export const SaveSwitchWebsocketConfiguration = async(body: SwitchWebsocketConfiguration) =>{
    const api = await apiClient();
    const response  = await api.post("dataConfiguration/save",body);
    return response;
}
export const addDataConfiguration = async(componentKey: string,dataConfiguration: IDataConfiguration) => {
    const api = await apiClient();
    const response = await api.post("dataConfiguration/save", {componentKey,dataConfiguration});
    return response
}
export const updateDataConfiguration = async(componentKey: string, dataConfiguration: IDataConfiguration) =>{
    const api = await apiClient();
    const response = await api.post("dataConfiguration/update", {componentKey,dataConfiguration});
    return response
}