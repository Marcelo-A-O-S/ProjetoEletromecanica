import { Project } from "../domain/models/Project";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { IProjectServices } from "./interfaces/IProjectServices";

export class ProjectServices implements IProjectServices{
    projectRepository: ProjectRepository;
    constructor(){
        this.projectRepository = new ProjectRepository();
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