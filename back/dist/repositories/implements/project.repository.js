"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const project_entity_1 = require("../../domain/entities/project.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ProjectRepository = class ProjectRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updatedProject = await this.prisma.project.update({
                where: {
                    id: Entity.id
                },
                data: {
                    description: Entity.description,
                    name: Entity.name
                }
            });
            return { entity: updatedProject, message: "Projeto atualizado com sucesso!" };
        }
        catch (err) {
            return { entity: new project_entity_1.Project(), message: `Erro ao atualizar projeto: ${err}` };
        }
    }
    async ListAll() {
        const projects = [];
        const projectsData = await this.prisma.project.findMany({
            include: {
                configurationProjects: true,
            }
        });
        projectsData.map((projectData) => {
            const project = new project_entity_1.Project();
            project.id = projectData.id;
            project.name = projectData.name;
            project.description = projectData.description;
            project.configurationsProjects = projectData.configurationProjects;
            projects.push(project);
        });
        return projects;
    }
    async Save(Entity) {
        try {
            if (Entity.id == 0) {
                const createdProject = await this.prisma.project.create({
                    data: {
                        description: Entity.description,
                        name: Entity.name
                    }
                });
                return { entity: createdProject, message: "Projeto criado com sucesso!" };
            }
            else {
                const updatedProject = await this.prisma.project.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        description: Entity.description,
                        name: Entity.name
                    }
                });
                return { entity: updatedProject, message: "Projeto atualizado com sucesso!" };
            }
        }
        catch (err) {
            return { entity: new project_entity_1.Project, message: `Erro ao salvar projeto: ${err}` };
        }
    }
    async GetbyId(Id) {
        const project = new project_entity_1.Project();
        const projectData = await this.prisma.project.findFirst({
            where: {
                id: Id
            },
            include: {
                configurationProjects: {
                    include: {
                        configuration: {
                            include: {
                                dataConfigurations: {
                                    where: {
                                        projectId: Id
                                    },
                                    include: {
                                        joystickWebsocketConfiguration: true,
                                        leverWebsocketConfiguration: true,
                                        switchWebsocketConfiguration: true,
                                    }
                                }
                            }
                        },
                        dataConfiguration: {
                            include: {
                                joystickWebsocketConfiguration: true,
                                leverWebsocketConfiguration: true,
                                switchWebsocketConfiguration: true,
                            }
                        }
                    }
                }
            }
        });
        if (projectData) {
            project.description = projectData.description;
            project.name = projectData.name;
            project.id = projectData.id;
            project.configurationsProjects = projectData.configurationProjects;
        }
        return project;
    }
    async Delete(Entity) {
        await this.prisma.project.delete({
            where: {
                id: Entity.id
            }
        });
        return "Projeto deletado com sucesso!";
    }
    async DeleteById(Id) {
        console.log("Deletando projeto pelo repositorio!");
        await this.prisma.project.delete({
            where: {
                id: Id
            }
        });
        return "Projeto deletado com sucesso!";
    }
};
exports.ProjectRepository = ProjectRepository;
exports.ProjectRepository = ProjectRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectRepository);
//# sourceMappingURL=project.repository.js.map