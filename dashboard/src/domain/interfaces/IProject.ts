import { ConfigurationProject } from "../models/ConfigurationProject";

export interface IProject{
    id:number;
    name: string;
    description: string;
    configurationsProjects?: Array<ConfigurationProject>
}