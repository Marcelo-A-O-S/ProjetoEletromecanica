import { DataConfigurationRepository } from "src/repositories/implements/data-config.repository";
import { IDataConfigurationServices } from "../interfaces/data-config-service.interface";
import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
export declare class DataConfigurationServices implements IDataConfigurationServices {
    private readonly dataConfigurationRepository;
    constructor(dataConfigurationRepository: DataConfigurationRepository);
    Save(entity: DataConfiguration): Promise<{
        entity: DataConfiguration;
        message: string;
    }>;
    GetAll(): Promise<DataConfiguration[]>;
    GetbyId(id: number): Promise<DataConfiguration>;
    Delete(entity: DataConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: DataConfiguration): Promise<{
        entity: DataConfiguration;
        message: string;
    }>;
}
