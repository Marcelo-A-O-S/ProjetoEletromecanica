import { DataConfiguration } from "./data-configuration.entity";
export declare class JoystickWebsocketConfiguration {
    id: number;
    dataConfigurationId: number;
    identifier: string;
    host: string;
    protocol: string;
    dataConfiguration?: DataConfiguration;
    constructor();
}
