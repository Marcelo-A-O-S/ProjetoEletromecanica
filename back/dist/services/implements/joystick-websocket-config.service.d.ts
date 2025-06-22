import { JoystickWebSocketConfigurationRepository } from "src/repositories/implements/joystick-websocket-config.repository";
import { IJoystickWebSocketConfigurationServices } from "../interfaces/joystick-websocket-config-service.interface";
import { JoystickWebsocketConfiguration } from "src/domain/entities/joystick-websocket-configuration.entity";
export declare class JoystickWebSocketConfigurationServices implements IJoystickWebSocketConfigurationServices {
    private readonly joystickWebSocketConfigurationRepository;
    constructor(joystickWebSocketConfigurationRepository: JoystickWebSocketConfigurationRepository);
    Save(entity: JoystickWebsocketConfiguration): Promise<{
        entity: JoystickWebsocketConfiguration;
        message: string;
    }>;
    GetAll(): Promise<JoystickWebsocketConfiguration[]>;
    GetbyId(id: number): Promise<JoystickWebsocketConfiguration>;
    Delete(entity: JoystickWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
    Update(entity: JoystickWebsocketConfiguration): Promise<{
        entity: JoystickWebsocketConfiguration;
        message: string;
    }>;
}
