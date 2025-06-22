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
exports.SwitchWebsocketConfigurationServices = void 0;
const switch_websocket_config_repository_1 = require("../../repositories/implements/switch-websocket-config.repository");
const common_1 = require("@nestjs/common");
let SwitchWebsocketConfigurationServices = class SwitchWebsocketConfigurationServices {
    switchWebsocketRepository;
    constructor(switchWebsocketRepository) {
        this.switchWebsocketRepository = switchWebsocketRepository;
    }
    async Save(entity) {
        return await this.switchWebsocketRepository.Save(entity);
    }
    async GetAll() {
        return await this.switchWebsocketRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.switchWebsocketRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.switchWebsocketRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.switchWebsocketRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.switchWebsocketRepository.Update(entity);
    }
};
exports.SwitchWebsocketConfigurationServices = SwitchWebsocketConfigurationServices;
exports.SwitchWebsocketConfigurationServices = SwitchWebsocketConfigurationServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [switch_websocket_config_repository_1.SwitchWebsocketConfigurationRepository])
], SwitchWebsocketConfigurationServices);
//# sourceMappingURL=switch-websocket-config.service.js.map