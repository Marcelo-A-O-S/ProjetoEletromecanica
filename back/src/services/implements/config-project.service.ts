import { ConfigurationProjectRepository } from "src/repositories/implements/config-project.repository";
import { IConfigurationProjectServices } from "../interfaces/config-project-service.interface";
import { Injectable } from "@nestjs/common";
import { ConfigurationProject } from "src/domain/entities/configuration-project.entity";
@Injectable()
export class ConfigurationProjectServices implements IConfigurationProjectServices{
    constructor(private readonly configurationProjectRepository: ConfigurationProjectRepository){
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