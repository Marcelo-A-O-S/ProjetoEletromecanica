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
exports.ConfigurationRepository = void 0;
const configuration_entity_1 = require("../../domain/entities/configuration.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ConfigurationRepository = class ConfigurationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updateConfiguration = await this.prisma.configuration.update({
                where: {
                    id: Entity.id
                },
                data: {
                    description: Entity.description,
                    name: Entity.name,
                    componentKey: Entity.componentKey,
                }
            });
            return { entity: updateConfiguration, message: "Configuração atualizada com sucesso!" };
        }
        catch (err) {
            console.error("Erro interno no servidor: ", err);
            return { entity: new configuration_entity_1.Configuration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async ListAll() {
        const configurations = [];
        const configurationsData = await this.prisma.configuration.findMany({
            include: {
                dataConfigurations: {
                    include: {
                        webSocketConfiguration: true,
                        joystickConfiguration: true,
                        joystickWebsocketConfiguration: true,
                        mqttConfiguration: true,
                        switchWebsocketConfiguration: true,
                        leverWebsocketConfiguration: true,
                    }
                }
            }
        });
        configurationsData.map((configurationData) => {
            const configuration = new configuration_entity_1.Configuration();
            configuration.id = configurationData.id;
            configuration.description = configurationData.description;
            configuration.name = configurationData.name;
            configuration.componentKey = configurationData.componentKey;
            configuration.dataConfigurations = configurationData.dataConfigurations;
            configurations.push(configuration);
        });
        return configurations;
    }
    async Save(Entity) {
        try {
            if (Entity.id === 0) {
                const createdConfiguration = await this.prisma.configuration.create({
                    data: {
                        description: Entity.description,
                        name: Entity.name,
                        componentKey: Entity.componentKey,
                    }
                });
                return { entity: createdConfiguration, message: "Configuração salva com sucesso!" };
            }
            else {
                const updateConfiguration = await this.prisma.configuration.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        description: Entity.description,
                        name: Entity.name,
                        componentKey: Entity.componentKey,
                    }
                });
                return { entity: updateConfiguration, message: "Configuração atualizada com sucesso!" };
            }
        }
        catch (err) {
            console.error("Erro interno no servidor: ", err);
            return { entity: new configuration_entity_1.Configuration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async GetbyId(Id) {
        const configuration = new configuration_entity_1.Configuration();
        const configurationData = await this.prisma.configuration.findFirst({
            where: {
                id: Id
            }
        });
        if (configurationData) {
            configuration.id = configurationData.id;
            configuration.description = configurationData.description;
            configuration.name = configurationData.name;
            configuration.componentKey = configurationData.componentKey;
        }
        return configuration;
    }
    async Delete(Entity) {
        await this.prisma.configuration.delete({
            where: {
                id: Entity.id
            }
        });
        return "Configuração deletada com sucesso!";
    }
    async DeleteById(Id) {
        await this.prisma.project.delete({
            where: {
                id: Id
            }
        });
        return "Configuração deletada com sucesso!";
    }
};
exports.ConfigurationRepository = ConfigurationRepository;
exports.ConfigurationRepository = ConfigurationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfigurationRepository);
//# sourceMappingURL=config.repository.js.map