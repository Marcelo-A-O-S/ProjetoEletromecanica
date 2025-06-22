import { Project } from "src/domain/entities/project.entity";
import { IProjectRepository } from "../interfaces/project-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class ProjectRepository implements IProjectRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: Project): Promise<{
        entity: Project;
        message: string;
    }>;
    ListAll(): Promise<Project[]>;
    Save(Entity: Project): Promise<{
        entity: Project;
        message: string;
    }>;
    GetbyId(Id: number): Promise<Project>;
    Delete(Entity: Project): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
