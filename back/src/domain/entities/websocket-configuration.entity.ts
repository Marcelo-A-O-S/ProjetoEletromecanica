import { DataConfiguration } from "./data-configuration.entity";

export class WebSocketConfiguration {
    id:number;
    dataConfigurationId: number;
    host: string;
    port:number;
    dataConfiguration?: DataConfiguration;
    constructor(){
        this.id = 0;
        this.host = "";
        this.port = 0;
        this.dataConfigurationId = 0;
    }
}