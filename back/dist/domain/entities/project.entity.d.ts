import { ConfigurationProject } from "./configuration-project.entity";
export declare class Project {
    id: number;
    name: string;
    description: string;
    configurationsProjects?: Array<ConfigurationProject>;
    constructor();
}
