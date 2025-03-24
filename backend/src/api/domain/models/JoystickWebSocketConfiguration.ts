import { DataConfiguration } from "./DataConfiguration";

export class JoystickWebSocketConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: string;
    dataConfiguration?: DataConfiguration
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "";
    }

}