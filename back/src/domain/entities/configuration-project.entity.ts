import { Configuration } from "./configuration.entity";
import { Project } from "./project.entity";
export class ConfigurationProject{
    id:number;
    projectId:number;
    configurationId: number;
    description: string;
    configuration?: Configuration;
    project?: Project;
    constructor(){
        this.id = 0;
        this.projectId = 0;
        this.configurationId = 0;
        this.description = ""
    }
}