import { DataConfiguration } from "../models/DataConfiguration";

export interface IConfiguration{
    id:number;
    name:string;
    description:string;
    componentKey?:string;
    dataConfigurations?:Array<DataConfiguration>
}
