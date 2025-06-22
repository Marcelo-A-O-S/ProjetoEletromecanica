import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
import { IGenerics } from "./generics.interface";
export interface IConfigurationProjectRepository extends IGenerics<ConfigurationProject> {
    FindAllByProjectId(projectId: number): Promise<ConfigurationProject>;
}
