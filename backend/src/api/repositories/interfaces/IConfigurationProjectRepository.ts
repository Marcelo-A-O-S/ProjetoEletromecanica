import { ConfigurationProject } from "../../domain/models/ConfigurationProject";
import { IGenerics } from "./IGenerics";

export interface IConfigurationProjectRepository extends IGenerics<ConfigurationProject>{
    FindAllByProjectId(projectId: number): Promise<ConfigurationProject>;
}