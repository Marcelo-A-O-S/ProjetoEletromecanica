import { ProjectRepository } from "src/repositories/implements/project.repository";
import { IProjectServices } from "../interfaces/project-service.interface";
import { Project } from "src/domain/entities/project.entity";
import { Injectable } from "@nestjs/common";
@Injectable()
export class ProjectServices implements IProjectServices{
    
    constructor(private readonly projectRepository: ProjectRepository){
    }
    async Save(entity: Project): Promise<{ entity: Project; message: string; }> {
        return await this.projectRepository.Save(entity);
    }
    async GetAll(): Promise<Project[]> {
        return await this.projectRepository.ListAll();
    }
    async GetbyId(id: number): Promise<Project> {
        return await this.projectRepository.GetbyId(id);
    }
    async Delete(entity: Project): Promise<string> {
        return await this.projectRepository.Delete(entity);
    }
    async DeleteById(Id: number): Promise<string> {
        return await this.projectRepository.DeleteById(Id);
    }
    async Update(entity: Project): Promise<{ entity: Project; message: string; }> {
        return await this.projectRepository.Update(entity);
    }

}