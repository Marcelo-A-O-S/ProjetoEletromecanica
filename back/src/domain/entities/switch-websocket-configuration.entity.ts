import { DataConfiguration } from "./data-configuration.entity";


export class SwitchWebsocketConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfiguration?: DataConfiguration
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
        this.identifier = "";
    }
}