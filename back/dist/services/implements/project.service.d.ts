import { ProjectRepository } from "src/repositories/implements/project.repository";
import { IProjectServices } from "../interfaces/project-service.interface";
import { Project } from "src/domain/entities/project.entity";
export declare class ProjectServices implements IProjectServices {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    Save(entity: Project): Promise<{
        entity: Project;
        message: string;
    }>;
    GetAll(): Promise<Project[]>;
    GetbyId(id: number): Promise<Project>;
    Delete(entity: Project): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: Project): Promise<{
        entity: Project;
        message: string;
    }>;
}
