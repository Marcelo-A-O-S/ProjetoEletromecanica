import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
import { IDataConfigurationRepository } from "../interfaces/data-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class DataConfigurationRepository implements IDataConfigurationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: DataConfiguration): Promise<{
        entity: DataConfiguration;
        message: string;
    }>;
    ListAll(): Promise<DataConfiguration[]>;
    Save(Entity: DataConfiguration): Promise<{
        entity: DataConfiguration;
        message: string;
    }>;
    GetbyId(Id: number): Promise<DataConfiguration>;
    Delete(Entity: DataConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
