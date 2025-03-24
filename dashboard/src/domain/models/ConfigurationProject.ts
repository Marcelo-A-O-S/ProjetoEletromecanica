import { IConfigurationProject } from "../interfaces/IConfigurationProject";

export class ConfigurationProject implements IConfigurationProject{
    id: number;
    configurationId: number;
    projectId?: number | undefined;
    description: string;
    constructor(){
        this.id = 0;
        this.configurationId = 0;
        this.description = "";
    }

}