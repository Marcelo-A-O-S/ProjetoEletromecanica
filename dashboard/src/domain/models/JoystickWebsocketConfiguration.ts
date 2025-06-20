import { IJoystickWebsocketConfiguration } from "../interfaces/IJoystickWebsocketConfiguration";

export class JoystickWebsocketConfiguration implements IJoystickWebsocketConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: "ws://" | "wss://";
    identifier: string;
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
        this.identifier = "";
    }
    

}