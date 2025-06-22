import { Configuration } from "./configuration.entity";
import { Project } from "./project.entity";
export declare class ConfigurationProject {
    id: number;
    projectId: number;
    configurationId: number;
    description: string;
    configuration?: Configuration;
    project?: Project;
    constructor();
}
