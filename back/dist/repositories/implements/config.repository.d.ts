import { Configuration } from "src/domain/entities/configuration.entity";
import { IConfigurationRepository } from "../interfaces/config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class ConfigurationRepository implements IConfigurationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: Configuration): Promise<{
        entity: Configuration;
        message: string;
    }>;
    ListAll(): Promise<Configuration[]>;
    Save(Entity: Configuration): Promise<{
        entity: Configuration;
        message: string;
    }>;
    GetbyId(Id: number): Promise<Configuration>;
    Delete(Entity: Configuration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
