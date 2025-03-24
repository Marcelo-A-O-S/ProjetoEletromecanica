import { Configuration } from "./Configuration";
import { ConfigurationProject } from "./ConfigurationProject";

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