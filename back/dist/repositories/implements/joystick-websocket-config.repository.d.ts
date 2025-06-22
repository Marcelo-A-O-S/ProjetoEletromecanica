import { JoystickWebsocketConfiguration } from "src/domain/entities/joystick-websocket-configuration.entity";
import { IJoystickWebSocketConfigurationRepository } from "../interfaces/joystick-websocket-config-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
export declare class JoystickWebSocketConfigurationRepository implements IJoystickWebSocketConfigurationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Update(Entity: JoystickWebsocketConfiguration): Promise<{
        entity: JoystickWebsocketConfiguration;
        message: string;
    }>;
    ListAll(): Promise<JoystickWebsocketConfiguration[]>;
    Save(Entity: JoystickWebsocketConfiguration): Promise<{
        entity: JoystickWebsocketConfiguration;
        message: string;
    }>;
    GetbyId(Id: number): Promise<JoystickWebsocketConfiguration>;
    Delete(Entity: JoystickWebsocketConfiguration): Promise<string>;
    DeleteById(Id: number): Promise<string>;
}
