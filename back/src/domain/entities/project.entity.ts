
import { ConfigurationProject } from "./configuration-project.entity";
export class Project {
    id: number;
    name: string;
    description: string;
    configurationsProjects?: Array<ConfigurationProject>;
    constructor(){
        this.id = 0;
        this.name = "";
        this.description = "";
        this.configurationsProjects = new Array<ConfigurationProject>();
    }
}