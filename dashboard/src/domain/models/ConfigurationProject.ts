import { IConfiguration } from "../interfaces/IConfiguration";
import { IConfigurationProject } from "../interfaces/IConfigurationProject";
import { IProject } from "../interfaces/IProject";

export class ConfigurationProject implements IConfigurationProject{
    id: number;
    configurationId: number;
    projectId?: number | undefined;
    description: string;
    project?: IProject;
    configuration?: IConfiguration; 
    constructor(){
        this.id = 0;
        this.configurationId = 0;
        this.description = "";
    }

}