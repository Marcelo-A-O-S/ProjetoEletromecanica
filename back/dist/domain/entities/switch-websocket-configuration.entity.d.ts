import { DataConfiguration } from "./data-configuration.entity";
export declare class SwitchWebsocketConfiguration {
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfiguration?: DataConfiguration;
    constructor();
}
