import { DataConfiguration } from "../models/DataConfiguration";

export interface IMQTTConfiguration{
    id:number;
    dataConfigurationId: number;
    host: string;
    port: number;
    dataConfiguration?: DataConfiguration;
}

