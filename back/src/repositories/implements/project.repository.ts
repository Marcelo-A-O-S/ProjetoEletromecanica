import { Project } from "src/domain/entities/project.entity";
import { IProjectRepository } from "../interfaces/project-repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectRepository implements IProjectRepository {
    constructor(private readonly prisma: PrismaService){}
    async Update(Entity: Project): Promise<{ entity: Project; message: string; }> {
        try{
            const updatedProject = await this.prisma.project.update({
                where: {
                    id: Entity.id
                },
                data: {
                    description: Entity.description,
                    name: Entity.name
                }
            })
            return { entity: updatedProject, message: "Projeto atualizado com sucesso!" };
        }catch(err){
            return { entity: new Project(), message:`Erro ao atualizar projeto: ${err}`};
        }
    }
    async ListAll(): Promise<Project[]> {
        const projects: Project[] = [];
        const projectsData = await this.prisma.project.findMany({
            include:{
                configurationProjects: true,
            }
        });
        projectsData.map((projectData) => {
            const project = new Project();
            project.id = projectData.id;
            project.name = projectData.name;
            project.description = projectData.description;
            project.configurationsProjects = projectData.configurationProjects;
            projects.push(project)
        })
        return projects;

    }
    async Save(Entity: Project): Promise<{ entity: Project; message: string; }> {
        try{
            if (Entity.id == 0) {
                const createdProject = await this.prisma.project.create({
                    data: {
                        description: Entity.description,
                        name: Entity.name
                    }
                })
                return { entity: createdProject, message: "Projeto criado com sucesso!" };
            } else {
                const updatedProject = await this.prisma.project.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        description: Entity.description,
                        name: Entity.name
                    }
                })
                return { entity: updatedProject, message: "Projeto atualizado com sucesso!" };
            }
        }catch(err){
            return {entity: new Project, message: `Erro ao salvar projeto: ${err}`};
        }
    }
    async GetbyId(Id: number): Promise<Project> {
        const project = new Project();
        const projectData = await this.prisma.project.findFirst({
            where: {
                id: Id
            },
            include:{
                configurationProjects: {
                    include: {
                        configuration: {
                            include:{
                                dataConfigurations:{
                                    where:{
                                        projectId: Id
                                    },
                                    include:{
                                        joystickWebsocketConfiguration:true,
                                        leverWebsocketConfiguration:true,
                                        switchWebsocketConfiguration:true,
                                    }
                                }
                            }
                        },
                        dataConfiguration:{
                            include:{
                                joystickWebsocketConfiguration:true,
                                leverWebsocketConfiguration:true,
                                switchWebsocketConfiguration:true,
                            }
                        }
                    }
                }
            }
        })
        if (projectData) {
            project.description = projectData.description;
            project.name = projectData.name;
            project.id = projectData.id;
            project.configurationsProjects = projectData.configurationProjects
        }
        return project;
    }
    async Delete(Entity: Project): Promise<string> {
        await this.prisma.project.delete({
            where:{
                id:  Entity.id
            }
        })
        return "Projeto deletado com sucesso!"
    }
    async DeleteById(Id: number): Promise<string> {
        console.log("Deletando projeto pelo repositorio!");
        await this.prisma.project.delete({
            where:{
                id:  Id
            }
        });
        return "Projeto deletado com sucesso!";
    }

}