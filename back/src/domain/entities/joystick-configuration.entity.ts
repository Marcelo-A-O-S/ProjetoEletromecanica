import { DataConfiguration } from "./data-configuration.entity";


export class JoystickConfiguration{
    id: number;
    dataConfigurationId: number;
    sensitivity: number;
    deadZone:number;
    dataConfiguration?:DataConfiguration;
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.sensitivity =0;
        this.deadZone = 0;
    }
}