import { SwitchWebsocketConfigurationRepository } from "src/repositories/implements/switch-websocket-config.repository";
import { ISwitchWebsocketConfigurationServices } from "../interfaces/switch-websocket-config-service.interface";
import { SwitchWebsocketConfiguration } from "src/domain/entities/switch-websocket-configuration.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class SwitchWebsocketConfigurationServices implements ISwitchWebsocketConfigurationServices{
    
    constructor(private readonly switchWebsocketRepository: SwitchWebsocketConfigurationRepository){
       
    }
    async Save(entity: SwitchWebsocketConfiguration): Promise<{ entity: SwitchWebsocketConfiguration; message: string; }> {
        return await this.switchWebsocketRepository.Save(entity);
    }
    async GetAll(): Promise<SwitchWebsocketConfiguration[]> {
        return await this.switchWebsocketRepository.ListAll();
    }
    async GetbyId(id: number): Promise<SwitchWebsocketConfiguration> {
        return await this.switchWebsocketRepository.GetbyId(id);
    }
    async Delete(entity: SwitchWebsocketConfiguration): Promise<string> {
        return await this.switchWebsocketRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.switchWebsocketRepository.DeleteById(Id);
    }
    async Update(entity: SwitchWebsocketConfiguration): Promise<{ entity: SwitchWebsocketConfiguration; message: string; }> {
        return await this.switchWebsocketRepository.Update(entity);
    }

}