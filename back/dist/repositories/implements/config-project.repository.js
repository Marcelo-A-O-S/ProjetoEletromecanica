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
exports.ConfigurationProjectRepository = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const configuration_project_entity_1 = require("../../domain/entities/configuration-project.entity");
const common_1 = require("@nestjs/common");
let ConfigurationProjectRepository = class ConfigurationProjectRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    FindAllByProjectId(projectId) {
        throw new Error("Method not implemented.");
    }
    async Update(Entity) {
        try {
            const updateConfigurationProject = await this.prisma.configurationProject.update({
                where: {
                    id: Entity.id
                },
                data: {
                    projectId: Entity.projectId,
                    description: Entity.description,
                    configurationId: Entity.configurationId
                }
            });
            return { entity: updateConfigurationProject, message: "Configuração do projeto salva com sucesso!" };
        }
        catch (err) {
            console.error("Erro interno no servidor: ", err);
            return { entity: new configuration_project_entity_1.ConfigurationProject(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async ListAll() {
        const configurationsProject = [];
        const configurationsData = await this.prisma.configurationProject.findMany({
            include: {
                configuration: true
            }
        });
        configurationsData.map((configurationData) => {
            const configurationProject = new configuration_project_entity_1.ConfigurationProject();
            configurationProject.id = configurationData.id;
            configurationProject.configurationId = configurationData.configurationId;
            configurationProject.projectId = configurationData.projectId;
            configurationProject.description = configurationData.description;
            configurationsProject.push(configurationProject);
        });
        return configurationsProject;
    }
    async Save(Entity) {
        try {
            if (Entity.id === 0) {
                const createdConfigurationProject = await this.prisma.configurationProject.create({
                    data: {
                        description: Entity.description,
                        configurationId: Entity.configurationId,
                        projectId: Entity.projectId
                    }
                });
                return { entity: createdConfigurationProject, message: "Configuração do projeto salva com sucesso!" };
            }
            else {
                const updateConfigurationProject = await this.prisma.configurationProject.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        configurationId: Entity.configurationId,
                        description: Entity.description,
                        projectId: Entity.projectId
                    }
                });
                return { entity: updateConfigurationProject, message: "Configuração do projeto atualizada com sucesso!" };
            }
        }
        catch (err) {
            return { entity: new configuration_project_entity_1.ConfigurationProject(), message: `Erro interno no servidor: ${err}` };
        }
    }
    GetbyId(Id) {
        throw new Error("Method not implemented.");
    }
    Delete(Entity) {
        throw new Error("Method not implemented.");
    }
    DeleteById(Id) {
        throw new Error("Method not implemented.");
    }
};
exports.ConfigurationProjectRepository = ConfigurationProjectRepository;
exports.ConfigurationProjectRepository = ConfigurationProjectRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfigurationProjectRepository);
//# sourceMappingURL=config-project.repository.js.map