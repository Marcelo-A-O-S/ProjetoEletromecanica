import { IJoystickWebsocketConfiguration } from "../interfaces/IJoystickWebsocketConfiguration";

export class JoystickWebSocketConfiguration implements IJoystickWebsocketConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: "ws://" | "wss://";
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
    }

}