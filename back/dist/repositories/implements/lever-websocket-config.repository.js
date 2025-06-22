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
exports.LeverWebsocketConfigurationRepository = void 0;
const lever_websocket_config_entity_1 = require("../../domain/entities/lever-websocket-config.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let LeverWebsocketConfigurationRepository = class LeverWebsocketConfigurationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updateEntity = await this.prisma.leverWebsocketConfiguration.update({
                where: {
                    id: Entity.id
                },
                data: {
                    dataConfigurationId: Entity.dataConfigurationId,
                    host: Entity.host,
                    identifier: Entity.identifier,
                    protocol: Entity.protocol
                }
            });
            return { entity: updateEntity, message: "Configuracao atualizada com sucesso!" };
        }
        catch (err) {
            return { entity: new lever_websocket_config_entity_1.LeverWebsocketConfiguration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async ListAll() {
        const leverWebsockets = [];
        const list = await this.prisma.leverWebsocketConfiguration.findMany();
        list.map((leverData) => {
            const leverWebsocket = new lever_websocket_config_entity_1.LeverWebsocketConfiguration();
            leverWebsocket.id = leverData.id;
            leverWebsocket.host = leverData.host;
            leverWebsocket.identifier = leverData.identifier;
            leverWebsocket.protocol = leverData.protocol;
            leverWebsocket.dataConfigurationId = leverData.dataConfigurationId;
            leverWebsockets.push(leverWebsocket);
        });
        return leverWebsockets;
    }
    async Save(Entity) {
        try {
            if (Entity.id == 0) {
                const createdEntity = await this.prisma.leverWebsocketConfiguration.create({
                    data: {
                        host: Entity.host,
                        identifier: Entity.identifier,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId
                    }
                });
                return { entity: createdEntity, message: "Configuracao salva com sucesso!" };
            }
            else {
                const updateEntity = await this.prisma.leverWebsocketConfiguration.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        dataConfigurationId: Entity.dataConfigurationId,
                        host: Entity.host,
                        identifier: Entity.identifier,
                        protocol: Entity.protocol
                    }
                });
                return { entity: updateEntity, message: "Configuracao atualizada com sucesso!" };
            }
        }
        catch (err) {
            return { entity: new lever_websocket_config_entity_1.LeverWebsocketConfiguration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async GetbyId(Id) {
        const leverWebsocket = new lever_websocket_config_entity_1.LeverWebsocketConfiguration();
        const leverWebsocketData = await this.prisma.leverWebsocketConfiguration.findFirst({
            where: {
                id: Id
            }
        });
        if (leverWebsocketData) {
            leverWebsocket.id = leverWebsocketData.id;
            leverWebsocket.host = leverWebsocketData.host;
            leverWebsocket.identifier = leverWebsocketData.identifier;
            leverWebsocket.protocol = leverWebsocketData.protocol;
            leverWebsocket.dataConfigurationId = leverWebsocketData.dataConfigurationId;
        }
        return leverWebsocket;
    }
    async Delete(Entity) {
        try {
            await this.prisma.leverWebsocketConfiguration.delete({
                where: {
                    id: Entity.id
                }
            });
            return "Configuracao deletada com sucesso!";
        }
        catch (err) {
            return `Erro interno no servidor: ${err}`;
        }
    }
    async DeleteById(Id) {
        try {
            await this.prisma.leverWebsocketConfiguration.delete({
                where: {
                    id: Id
                }
            });
            return "Configuracao deletada com sucesso!";
        }
        catch (err) {
            return `Erro interno no servidor: ${err}`;
        }
    }
};
exports.LeverWebsocketConfigurationRepository = LeverWebsocketConfigurationRepository;
exports.LeverWebsocketConfigurationRepository = LeverWebsocketConfigurationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeverWebsocketConfigurationRepository);
//# sourceMappingURL=lever-websocket-config.repository.js.map