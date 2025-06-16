import { JoystickWebSocketConfigurationRepository } from "src/repositories/implements/joystick-websocket-config.repository";
import { IJoystickWebSocketConfigurationServices } from "../interfaces/joystick-websocket-config-service.interface";
import { JoystickWebsocketConfiguration } from "src/domain/entities/joystick-websocket-configuration.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class JoystickWebSocketConfigurationServices implements IJoystickWebSocketConfigurationServices{
    constructor(private readonly joystickWebSocketConfigurationRepository: JoystickWebSocketConfigurationRepository){

    }
    async Save(entity: JoystickWebsocketConfiguration): Promise<{ entity: JoystickWebsocketConfiguration; message: string; }> {
        return await this.joystickWebSocketConfigurationRepository.Save(entity);
    }
    async GetAll(): Promise<JoystickWebsocketConfiguration[]> {
        return await this.joystickWebSocketConfigurationRepository.ListAll();
    }
    async GetbyId(id: number): Promise<JoystickWebsocketConfiguration> {
        return await this.joystickWebSocketConfigurationRepository.GetbyId(id);
    }
    async Delete(entity: JoystickWebsocketConfiguration): Promise<string> {
        return await this.joystickWebSocketConfigurationRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.joystickWebSocketConfigurationRepository.DeleteById(Id);
    }
    async Update(entity: JoystickWebsocketConfiguration): Promise<{ entity: JoystickWebsocketConfiguration; message: string; }> {
        return await this.joystickWebSocketConfigurationRepository.Update(entity);
    }

}