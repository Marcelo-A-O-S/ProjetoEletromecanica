import { DataConfiguration } from "../domain/models/DataConfiguration";
import { DataConfigurationRepository } from "../repositories/DataConfigurationRepository";
import { IDataConfigurationServices } from "./interfaces/IDataConfigurationServices";

export class DataConfigurationServices implements IDataConfigurationServices{
    dataConfigurationRepository: DataConfigurationRepository;
    constructor(){
        this.dataConfigurationRepository = new DataConfigurationRepository();
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