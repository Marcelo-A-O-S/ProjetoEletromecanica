import { LeverWebsocketConfigurationRepository } from "src/repositories/implements/lever-websocket-config.repository";
import { ILeverWebsocketConfigurationServices } from "../interfaces/lever-websocket-config-service.interface";
import { LeverWebsocketConfiguration } from "src/domain/entities/lever-websocket-config.entity";
export declare class LeverWebsocketConfigurationServices implements ILeverWebsocketConfigurationServices {
    private readonly leverWebsocketRepository;
    constructor(leverWebsocketRepository: LeverWebsocketConfigurationRepository);
    Save(entity: LeverWebsocketConfiguration): Promise<{
        entity: LeverWebsocketConfiguration;
        message: string;
    }>;
    GetAll(): Promise<LeverWebsocketConfiguration[]>;
    GetbyId(id: number): Promise<LeverWebsocketConfiguration>;
    Delete(entity: LeverWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: LeverWebsocketConfiguration): Promise<{
        entity: LeverWebsocketConfiguration;
        message: string;
    }>;
}
