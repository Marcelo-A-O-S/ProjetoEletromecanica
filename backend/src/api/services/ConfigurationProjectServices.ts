import { ConfigurationProject } from "../domain/models/ConfigurationProject";
import { ConfigurationProjectRepository } from "../repositories/ConfigurationProjectRepository";
import { IConfigurationProjectServices } from "./interfaces/IConfigurationProjectServices";

export class ConfigurationProjectServices implements IConfigurationProjectServices{
    configurationProjectRepository: ConfigurationProjectRepository;
    constructor(){
        this.configurationProjectRepository = new ConfigurationProjectRepository();
    }
    async Save(entity: ConfigurationProject): Promise<{ entity: ConfigurationProject; message: string; }> {
        return await this.configurationProjectRepository.Save(entity);
    }
    async GetAll(): Promise<ConfigurationProject[]> {
        return await this.configurationProjectRepository.ListAll();
    }
    async GetbyId(id: number): Promise<ConfigurationProject> {
        return await this.configurationProjectRepository.GetbyId(id);
    }
    async Delete(entity: ConfigurationProject): Promise<string> {
        return await this.configurationProjectRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.configurationProjectRepository.DeleteById(Id);
    }
    async Update(entity: ConfigurationProject): Promise<{ entity: ConfigurationProject; message: string; }> {
        return await this.configurationProjectRepository.Update(entity);
    }

}