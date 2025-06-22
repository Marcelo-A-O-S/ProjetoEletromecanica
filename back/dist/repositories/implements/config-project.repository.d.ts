import { PrismaService } from "src/prisma/prisma.service";
import { IConfigurationProjectRepository } from "../interfaces/config-project-repository.interface";
import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
export declare class ConfigurationProjectRepository implements IConfigurationProjectRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    FindAllByProjectId(projectId: number): Promise<ConfigurationProject>;
    Update(Entity: ConfigurationProject): Promise<{
        entity: ConfigurationProject;
        message: string;
    }>;
    ListAll(): Promise<ConfigurationProject[]>;
    Save(Entity: ConfigurationProject): Promise<{
        entity: ConfigurationProject;
        message: string;
    }>;
    GetbyId(Id: number): Promise<ConfigurationProject>;
    Delete(Entity: ConfigurationProject): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
