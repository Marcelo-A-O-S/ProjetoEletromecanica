import { IMQTTConfiguration } from "../interfaces/IMQTTConfiguration";
import { DataConfiguration } from "./DataConfiguration";

export class MQTTConfiguration implements IMQTTConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    port: number;
    dataConfiguration?: DataConfiguration | undefined;
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.port = 0;
    }
}