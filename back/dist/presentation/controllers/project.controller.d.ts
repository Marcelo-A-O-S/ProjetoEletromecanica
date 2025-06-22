import { ProjectServices } from "src/services/implements/project.service";
import { Project } from "src/domain/entities/project.entity";
export declare class ProjectController {
    private readonly projectServices;
    constructor(projectServices: ProjectServices);
    getById(id: string): Promise<Project>;
    getAll(): Promise<Project[]>;
    Save(body: any): Promise<Project>;
    Update(body: any): Promise<Project>;
    Delete(body: any): Promise<string>;
    DeleteById(id: string): Promise<string>;
}
