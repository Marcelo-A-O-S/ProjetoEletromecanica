import { DataConfiguration } from "./data-configuration.entity";
export declare class WebSocketConfiguration {
    id: number;
    dataConfigurationId: number;
    host: string;
    port: number;
    dataConfiguration?: DataConfiguration;
    constructor();
}
