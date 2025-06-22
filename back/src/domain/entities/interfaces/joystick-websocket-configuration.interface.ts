import { DataConfiguration } from "../data-configuration.entity";

export interface IJoystickWebsocketConfiguration {
    id: number;
    dataConfigurationId: number;
    identifier: string;
    host: string;
    protocol: string;
    dataConfiguration?: DataConfiguration
}