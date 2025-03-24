import { IConfiguration } from "../interfaces/IConfiguration";
import { DataConfiguration } from "./DataConfiguration";

export class Configuration implements IConfiguration{
    id: number;
    name: string;
    description: string;
    componentKey?: string | undefined;
    dataConfigurations?: DataConfiguration[] | undefined;
    constructor(){
        this.id = 0;
        this.name = "";
        this.description = "";
    }
    
    
}