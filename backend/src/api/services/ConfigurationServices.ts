import { Configuration } from "../domain/models/Configuration";
import { ConfigurationRepository } from "../repositories/ConfigurationRepository";
import { IConfigurationServices } from "./interfaces/IConfigurationServices";

export class ConfigurationServices implements IConfigurationServices{
    configurationRepository: ConfigurationRepository;
    constructor(){
        this.configurationRepository = new ConfigurationRepository();
    }
    async Save(entity: Configuration): Promise<{ entity: Configuration; message: string; }> {
        return await this.configurationRepository.Save(entity);
    }
    async GetAll(): Promise<Configuration[]> {
        return await this.configurationRepository.ListAll();
    }
    async GetbyId(id: number): Promise<Configuration> {
        return await this.configurationRepository.GetbyId(id);
    }
    async Delete(entity: Configuration): Promise<string> {
        return await this.configurationRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.configurationRepository.DeleteById(Id);
    }
    async Update(entity: Configuration): Promise<{ entity: Configuration; message: string; }> {
        return await this.configurationRepository.Update(entity);
    }

}