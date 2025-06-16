import { DataConfiguration } from "./data-configuration.entity";


export class JoystickWebsocketConfiguration{
    id: number;
    dataConfigurationId: number;
    identifier: string;
    host: string;
    protocol: string;
    dataConfiguration?: DataConfiguration
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
        this.identifier = "";
    }

}