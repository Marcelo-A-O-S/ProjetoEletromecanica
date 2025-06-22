import { ConfigurationProjectRepository } from "src/repositories/implements/config-project.repository";
import { IConfigurationProjectServices } from "../interfaces/config-project-service.interface";
import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
export declare class ConfigurationProjectServices implements IConfigurationProjectServices {
    private readonly configurationProjectRepository;
    constructor(configurationProjectRepository: ConfigurationProjectRepository);
    Save(entity: ConfigurationProject): Promise<{
        entity: ConfigurationProject;
        message: string;
    }>;
    GetAll(): Promise<ConfigurationProject[]>;
    GetbyId(id: number): Promise<ConfigurationProject>;
    Delete(entity: ConfigurationProject): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: ConfigurationProject): Promise<{
        entity: ConfigurationProject;
        message: string;
    }>;
}
