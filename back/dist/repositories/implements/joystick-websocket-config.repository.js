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
exports.JoystickWebSocketConfigurationRepository = void 0;
const joystick_websocket_configuration_entity_1 = require("../../domain/entities/joystick-websocket-configuration.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let JoystickWebSocketConfigurationRepository = class JoystickWebSocketConfigurationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updateConfiguration = await this.prisma.joystickWebsocketConfiguration.update({
                where: {
                    id: Entity.id
                },
                data: {
                    host: Entity.host,
                    protocol: Entity.protocol,
                    dataConfigurationId: Entity.dataConfigurationId,
                    identifier: Entity.identifier
                }
            });
            return { entity: updateConfiguration, message: "Configuração atualizada com sucesso!" };
        }
        catch (e) {
            return { entity: new joystick_websocket_configuration_entity_1.JoystickWebsocketConfiguration(), message: `Erro interno no servidor: ${e}` };
        }
    }
    async ListAll() {
        const joystickWebsocketLists = [];
        const listData = await this.prisma.joystickWebsocketConfiguration.findMany();
        listData.map((joystickWebsocketData) => {
            const joystickWebSocketConfiguration = new joystick_websocket_configuration_entity_1.JoystickWebsocketConfiguration();
            joystickWebSocketConfiguration.id = joystickWebsocketData.id;
            joystickWebSocketConfiguration.host = joystickWebsocketData.host;
            joystickWebSocketConfiguration.protocol = joystickWebsocketData.protocol;
            joystickWebSocketConfiguration.identifier = joystickWebsocketData.identifier;
            joystickWebSocketConfiguration.dataConfigurationId = joystickWebsocketData.dataConfigurationId;
            joystickWebsocketLists.push(joystickWebSocketConfiguration);
        });
        return joystickWebsocketLists;
    }
    async Save(Entity) {
        try {
            if (Entity.id == 0) {
                const createConfiguration = await this.prisma.joystickWebsocketConfiguration.create({
                    data: {
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                });
                return { entity: createConfiguration, message: "Configuração salva com sucesso!" };
            }
            else {
                const updateConfiguration = await this.prisma.joystickWebsocketConfiguration.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                });
                return { entity: updateConfiguration, message: "Configuração atualizada com sucesso!" };
            }
        }
        catch (e) {
            return { entity: new joystick_websocket_configuration_entity_1.JoystickWebsocketConfiguration(), message: `Erro interno no servidor: ${e}` };
        }
    }
    async GetbyId(Id) {
        const joystickWebsocketConfiguration = new joystick_websocket_configuration_entity_1.JoystickWebsocketConfiguration();
        const joystickWebSocketConfigurationData = await this.prisma.joystickWebsocketConfiguration.findFirst({
            where: {
                id: Id
            }
        });
        if (joystickWebSocketConfigurationData) {
            joystickWebsocketConfiguration.id = joystickWebSocketConfigurationData.id;
            joystickWebsocketConfiguration.host = joystickWebSocketConfigurationData.host;
            joystickWebsocketConfiguration.protocol = joystickWebSocketConfigurationData.protocol;
            joystickWebsocketConfiguration.identifier = joystickWebSocketConfigurationData.identifier;
            joystickWebsocketConfiguration.dataConfigurationId = joystickWebSocketConfigurationData.dataConfigurationId;
        }
        return joystickWebsocketConfiguration;
    }
    async Delete(Entity) {
        try {
            await this.prisma.joystickWebsocketConfiguration.delete({
                where: {
                    id: Entity.id
                }
            });
            return "A configuração foi desfeita com sucesso!";
        }
        catch (err) {
            return `Erro interno no servidor: ${err}`;
        }
    }
    async DeleteById(Id) {
        try {
            await this.prisma.joystickWebsocketConfiguration.delete({
                where: {
                    id: Id
                }
            });
            return "A configuração foi desfeita com sucesso!";
        }
        catch (err) {
            return `Erro interno no servidor: ${err}`;
        }
    }
};
exports.JoystickWebSocketConfigurationRepository = JoystickWebSocketConfigurationRepository;
exports.JoystickWebSocketConfigurationRepository = JoystickWebSocketConfigurationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JoystickWebSocketConfigurationRepository);
//# sourceMappingURL=joystick-websocket-config.repository.js.map