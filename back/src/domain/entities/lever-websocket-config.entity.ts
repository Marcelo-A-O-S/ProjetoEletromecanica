import { DataConfiguration } from "./data-configuration.entity";


export class LeverWebsocketConfiguration {
    id: number;
    identifier: string;
    dataConfigurationId: number;
    protocol: string;
    host:string;
    dataConfiguration?: DataConfiguration
    constructor(){
        this.dataConfigurationId = 0;
        this.host = "";
        this.identifier = "";
        this.protocol = "ws://";
        this.id = 0;
    }
}