import { LeverWebsocketConfiguration } from "src/domain/entities/lever-websocket-config.entity";
import { ILeverWebsocketConfigurationRepository } from "../interfaces/lever-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class LeverWebsocketConfigurationRepository implements ILeverWebsocketConfigurationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: LeverWebsocketConfiguration): Promise<{
        entity: LeverWebsocketConfiguration;
        message: string;
    }>;
    ListAll(): Promise<LeverWebsocketConfiguration[]>;
    Save(Entity: LeverWebsocketConfiguration): Promise<{
        entity: LeverWebsocketConfiguration;
        message: string;
    }>;
    GetbyId(Id: number): Promise<LeverWebsocketConfiguration>;
    Delete(Entity: LeverWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
