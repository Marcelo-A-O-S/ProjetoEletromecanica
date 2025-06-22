import { DataConfiguration } from "./data-configuration.entity";
export declare class JoystickConfiguration {
    id: number;
    dataConfigurationId: number;
    sensitivity: number;
    deadZone: number;
    dataConfiguration?: DataConfiguration;
    constructor();
}
