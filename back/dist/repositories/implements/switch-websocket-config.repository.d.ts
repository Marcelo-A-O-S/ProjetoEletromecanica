import { SwitchWebsocketConfiguration } from "src/domain/entities/switch-websocket-configuration.entity";
import { ISwitchWebsocketConfigurationRepository } from "../interfaces/switch-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class SwitchWebsocketConfigurationRepository implements ISwitchWebsocketConfigurationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: SwitchWebsocketConfiguration): Promise<{
        entity: SwitchWebsocketConfiguration;
        message: string;
    }>;
    ListAll(): Promise<SwitchWebsocketConfiguration[]>;
    Save(Entity: SwitchWebsocketConfiguration): Promise<{
        entity: SwitchWebsocketConfiguration;
        message: string;
    }>;
    GetbyId(Id: number): Promise<SwitchWebsocketConfiguration>;
    Delete(Entity: SwitchWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
