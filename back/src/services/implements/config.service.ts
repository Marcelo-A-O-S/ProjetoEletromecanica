import { ConfigurationRepository } from "src/repositories/implements/config.repository";
import { IConfigurationServices } from "../interfaces/config-service.interface";
import { Configuration } from "src/domain/entities/configuration.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class ConfigurationServices implements IConfigurationServices{
    constructor(private readonly configurationRepository: ConfigurationRepository){
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