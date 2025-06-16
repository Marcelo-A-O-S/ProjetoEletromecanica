import { LeverWebsocketConfigurationRepository } from "src/repositories/implements/lever-websocket-config.repository";
import { ILeverWebsocketConfigurationServices } from "../interfaces/lever-websocket-config-service.interface";
import { LeverWebsocketConfiguration } from "src/domain/entities/lever-websocket-config.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class LeverWebsocketConfigurationServices implements ILeverWebsocketConfigurationServices{
    
    constructor(private readonly leverWebsocketRepository : LeverWebsocketConfigurationRepository){
    }
    async Save(entity: LeverWebsocketConfiguration): Promise<{ entity: LeverWebsocketConfiguration; message: string; }> {
        return await this.leverWebsocketRepository.Save(entity);
    }
    async GetAll(): Promise<LeverWebsocketConfiguration[]> {
       return await this.leverWebsocketRepository.ListAll();
    }
    async GetbyId(id: number): Promise<LeverWebsocketConfiguration> {
        return await this.leverWebsocketRepository.GetbyId(id);
    }
    async Delete(entity: LeverWebsocketConfiguration): Promise<string> {
        return await this.leverWebsocketRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.leverWebsocketRepository.DeleteById(Id);
    }
    async Update(entity: LeverWebsocketConfiguration): Promise<{ entity: LeverWebsocketConfiguration; message: string; }> {
        return await this.leverWebsocketRepository.Update(entity);
    }

}