import { IProject } from "../interfaces/IProject";
import { ConfigurationProject } from "./ConfigurationProject";

export class Project implements IProject{
    id: number;
    name: string;
    description: string;
    configurationsProjects?: ConfigurationProject[] | undefined;
    constructor(){
        this.id = 0;
        this.name = "";
        this.description = "";

    }
}