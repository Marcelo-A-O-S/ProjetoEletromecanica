import { DataConfiguration } from "./DataConfiguration";

export class Configuration{
    id:number;
    name:string;
    description: string;
    componentKey:string|null;
    dataConfigurations?: Array<DataConfiguration>;
    constructor(){
        this.id= 0;
        this.name = "";
        this.description = "";
        this.componentKey = "";
        this.dataConfigurations = [];
    }
}