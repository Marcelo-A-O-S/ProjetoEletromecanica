import { DataConfiguration } from "./data-configuration.entity";
export declare class Configuration {
    id: number;
    name: string;
    description: string;
    componentKey: string | null;
    dataConfigurations?: Array<DataConfiguration>;
    constructor();
}
