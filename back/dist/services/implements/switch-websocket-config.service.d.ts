import { SwitchWebsocketConfigurationRepository } from "src/repositories/implements/switch-websocket-config.repository";
import { ISwitchWebsocketConfigurationServices } from "../interfaces/switch-websocket-config-service.interface";
import { SwitchWebsocketConfiguration } from "src/domain/entities/switch-websocket-configuration.entity";
export declare class SwitchWebsocketConfigurationServices implements ISwitchWebsocketConfigurationServices {
    private readonly switchWebsocketRepository;
    constructor(switchWebsocketRepository: SwitchWebsocketConfigurationRepository);
    Save(entity: SwitchWebsocketConfiguration): Promise<{
        entity: SwitchWebsocketConfiguration;
        message: string;
    }>;
    GetAll(): Promise<SwitchWebsocketConfiguration[]>;
    GetbyId(id: number): Promise<SwitchWebsocketConfiguration>;
    Delete(entity: SwitchWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: SwitchWebsocketConfiguration): Promise<{
        entity: SwitchWebsocketConfiguration;
        message: string;
    }>;
}
