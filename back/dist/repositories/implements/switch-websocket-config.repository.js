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
exports.SwitchWebsocketConfigurationRepository = void 0;
const switch_websocket_configuration_entity_1 = require("../../domain/entities/switch-websocket-configuration.entity");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let SwitchWebsocketConfigurationRepository = class SwitchWebsocketConfigurationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Update(Entity) {
        try {
            const updateEntity = await this.prisma.switchWebsocketConfiguration.update({
                where: {
                    id: Entity.id
                },
                data: {
                    host: Entity.host,
                    protocol: Entity.protocol,
                    dataConfigurationId: Entity.dataConfigurationId
                }
            });
            return { entity: updateEntity, message: "Configuracao atualizada com sucesso!" };
        }
        catch (err) {
            return { entity: new switch_websocket_configuration_entity_1.SwitchWebsocketConfiguration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async ListAll() {
        const switchs = [];
        const listData = await this.prisma.switchWebsocketConfiguration.findMany();
        listData.map((switchData) => {
            const switchWebsocket = new switch_websocket_configuration_entity_1.SwitchWebsocketConfiguration();
            switchWebsocket.id = switchData.id;
            switchWebsocket.host = switchData.host;
            switchWebsocket.protocol = switchData.protocol;
            switchWebsocket.dataConfigurationId = switchData.dataConfigurationId;
            switchWebsocket.identifier = switchData.identifier;
            switchs.push(switchWebsocket);
        });
        return switchs;
    }
    async Save(Entity) {
        try {
            if (Entity.id === 0) {
                const createdEntity = await this.prisma.switchWebsocketConfiguration.create({
                    data: {
                        host: Entity.host,
                        protocol: Entity.protocol,
                        dataConfigurationId: Entity.dataConfigurationId,
                        identifier: Entity.identifier
                    }
                });
                return { entity: createdEntity, message: "Salvo com sucesso!" };
            }
            else {
                const updateEntity = await this.prisma.switchWebsocketConfiguration.update({
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
                return { entity: updateEntity, message: "Configuracao atualizada com sucesso!" };
            }
        }
        catch (err) {
            return { entity: new switch_websocket_configuration_entity_1.SwitchWebsocketConfiguration(), message: `Erro interno no servidor: ${err}` };
        }
    }
    async GetbyId(Id) {
        const switchWebsocket = new switch_websocket_configuration_entity_1.SwitchWebsocketConfiguration();
        const switchData = await this.prisma.switchWebsocketConfiguration.findFirst({
            where: {
                id: Id
            }
        });
        if (switchData) {
            switchWebsocket.id = switchData.id;
            switchWebsocket.host = switchData.host;
            switchWebsocket.dataConfigurationId = switchData.dataConfigurationId;
            switchWebsocket.protocol = switchData.protocol;
            switchWebsocket.identifier = switchData.identifier;
        }
        return switchWebsocket;
    }
    async Delete(Entity) {
        try {
            await this.prisma.switchWebsocketConfiguration.delete({
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
            await this.prisma.switchWebsocketConfiguration.delete({
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
exports.SwitchWebsocketConfigurationRepository = SwitchWebsocketConfigurationRepository;
exports.SwitchWebsocketConfigurationRepository = SwitchWebsocketConfigurationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SwitchWebsocketConfigurationRepository);
//# sourceMappingURL=switch-websocket-config.repository.js.map