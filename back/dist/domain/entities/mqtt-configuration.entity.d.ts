import { DataConfiguration } from "./data-configuration.entity";
export declare class MQTTConfiguration {
    id: number;
    dataConfigurationId: number;
    host: string;
    port: number;
    dataConfiguration?: DataConfiguration;
    constructor();
}
