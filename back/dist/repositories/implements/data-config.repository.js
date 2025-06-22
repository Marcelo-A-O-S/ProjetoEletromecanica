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
exports.DataConfigurationRepository = void 0;
const data_configuration_entity_1 = require("../../domain/entities/data-configuration.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let DataConfigurationRepository = class DataConfigurationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updateDataConfiguration = await this.prisma.dataConfiguration.update({
                where: {
                    id: Entity.id
                },
                data: {
                    configurationId: Entity.configurationId,
                }
            });
            return { entity: updateDataConfiguration, message: `Os dados da configuração foram salvas!` };
        }
        catch (e) {
            return { entity: new data_configuration_entity_1.DataConfiguration(), message: `Erro interno no servidor: ${e}` };
        }
    }
    async ListAll() {
        const datasConfigurations = [];
        const listData = await this.prisma.dataConfiguration.findMany();
        listData.map((dataConfigurationDb) => {
            const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
            dataConfiguration.id = dataConfigurationDb.id;
            dataConfiguration.configurationId = dataConfigurationDb.configurationId;
            dataConfiguration.projectId = dataConfigurationDb.projectId;
            datasConfigurations.push(dataConfiguration);
        });
        return datasConfigurations;
    }
    async Save(Entity) {
        try {
            if (Entity.id == 0) {
                const createDataConfiguration = await this.prisma.dataConfiguration.create({
                    data: {
                        configurationId: Entity.configurationId,
                        projectId: Entity.projectId,
                        configurationProjectId: Entity.configurationProjectId,
                    }
                });
                return { entity: createDataConfiguration, message: `Os dados da configuração foram salvas!` };
            }
            else {
                const updateDataConfiguration = await this.prisma.dataConfiguration.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        configurationId: Entity.configurationId,
                    }
                });
                return { entity: updateDataConfiguration, message: `Os dados da configuração foram salvas!` };
            }
        }
        catch (e) {
            return { entity: new data_configuration_entity_1.DataConfiguration(), message: `Erro interno no servidor: ${e}` };
        }
    }
    async GetbyId(Id) {
        const dataConfiguration = new data_configuration_entity_1.DataConfiguration();
        const dataConfigurationDb = await this.prisma.dataConfiguration.findFirst({
            where: {
                id: Id
            },
            include: {
                configuration: {
                    include: {
                        dataConfigurations: {
                            where: {
                                projectId: Id
                            }
                        }
                    }
                },
            }
        });
        if (dataConfigurationDb) {
            dataConfiguration.id = dataConfigurationDb.id;
            dataConfiguration.configurationId = dataConfigurationDb.configurationId;
            dataConfiguration.projectId = dataConfigurationDb.projectId;
        }
        return dataConfiguration;
    }
    async Delete(Entity) {
        await this.prisma.dataConfiguration.delete({
            where: {
                id: Entity.id
            }
        });
        return "Dados de configuração deletado com sucesso!";
    }
    async DeleteById(Id) {
        await this.prisma.dataConfiguration.delete({
            where: {
                id: Id
            }
        });
        return "Dados de configuração deletado com sucesso!";
    }
};
exports.DataConfigurationRepository = DataConfigurationRepository;
exports.DataConfigurationRepository = DataConfigurationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DataConfigurationRepository);
//# sourceMappingURL=data-config.repository.js.map