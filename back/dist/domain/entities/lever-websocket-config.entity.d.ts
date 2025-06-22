import { DataConfiguration } from "./data-configuration.entity";
export declare class LeverWebsocketConfiguration {
    id: number;
    identifier: string;
    dataConfigurationId: number;
    protocol: string;
    host: string;
    dataConfiguration?: DataConfiguration;
    constructor();
}
