import { JoystickWebSocketConfiguration } from "../domain/models/JoystickWebSocketConfiguration";
import { JoystickWebSocketConfigurationRepository } from "../repositories/JoystickWebSocketConfigurationRepository";
import { IJoystickWebSocketConfigurationServices } from "./interfaces/IJoystickWebSocketConfigurationServices";

export class JoystickWebSocketConfigurationServices implements IJoystickWebSocketConfigurationServices{
    joystickWebSocketConfigurationRepository: JoystickWebSocketConfigurationRepository;
    constructor(){
        this.joystickWebSocketConfigurationRepository = new JoystickWebSocketConfigurationRepository();
    }
    async Save(entity: JoystickWebSocketConfiguration): Promise<{ entity: JoystickWebSocketConfiguration; message: string; }> {
        return await this.joystickWebSocketConfigurationRepository.Save(entity);
    }
    async GetAll(): Promise<JoystickWebSocketConfiguration[]> {
        return await this.joystickWebSocketConfigurationRepository.ListAll();
    }
    async GetbyId(id: number): Promise<JoystickWebSocketConfiguration> {
        return await this.joystickWebSocketConfigurationRepository.GetbyId(id);
    }
    async Delete(entity: JoystickWebSocketConfiguration): Promise<string> {
        return await this.joystickWebSocketConfigurationRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.joystickWebSocketConfigurationRepository.DeleteById(Id);
    }
    async Update(entity: JoystickWebSocketConfiguration): Promise<{ entity: JoystickWebSocketConfiguration; message: string; }> {
        return await this.joystickWebSocketConfigurationRepository.Update(entity);
    }

}