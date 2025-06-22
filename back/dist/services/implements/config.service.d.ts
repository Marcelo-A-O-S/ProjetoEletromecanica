import { ConfigurationRepository } from "src/repositories/implements/config.repository";
import { IConfigurationServices } from "../interfaces/config-service.interface";
import { Configuration } from "src/domain/entities/configuration.entity";
export declare class ConfigurationServices implements IConfigurationServices {
    private readonly configurationRepository;
    constructor(configurationRepository: ConfigurationRepository);
    Save(entity: Configuration): Promise<{
        entity: Configuration;
        message: string;
    }>;
    GetAll(): Promise<Configuration[]>;
    GetbyId(id: number): Promise<Configuration>;
    Delete(entity: Configuration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: Configuration): Promise<{
        entity: Configuration;
        message: string;
    }>;
}
