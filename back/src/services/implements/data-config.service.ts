import { DataConfigurationRepository } from "src/repositories/implements/data-config.repository";
import { IDataConfigurationServices } from "../interfaces/data-config-service.interface";
import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class DataConfigurationServices implements IDataConfigurationServices{
    constructor(private readonly dataConfigurationRepository: DataConfigurationRepository){
    }
    async Save(entity: DataConfiguration): Promise<{ entity: DataConfiguration; message: string; }> {
        return await this.dataConfigurationRepository.Save(entity);
    }
    async GetAll(): Promise<DataConfiguration[]> {
        return await this.dataConfigurationRepository.ListAll();
    }
    async GetbyId(id: number): Promise<DataConfiguration> {
        return await this.dataConfigurationRepository.GetbyId(id);
    }
    async Delete(entity: DataConfiguration): Promise<string> {
        return await this.dataConfigurationRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.dataConfigurationRepository.DeleteById(Id);
    }
    async Update(entity: DataConfiguration): Promise<{ entity: DataConfiguration; message: string; }> {
        return await this.dataConfigurationRepository.Update(entity);
    }
}