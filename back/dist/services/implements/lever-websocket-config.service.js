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
exports.LeverWebsocketConfigurationServices = void 0;
const lever_websocket_config_repository_1 = require("../../repositories/implements/lever-websocket-config.repository");
const common_1 = require("@nestjs/common");
let LeverWebsocketConfigurationServices = class LeverWebsocketConfigurationServices {
    leverWebsocketRepository;
    constructor(leverWebsocketRepository) {
        this.leverWebsocketRepository = leverWebsocketRepository;
    }
    async Save(entity) {
        return await this.leverWebsocketRepository.Save(entity);
    }
    async GetAll() {
        return await this.leverWebsocketRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.leverWebsocketRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.leverWebsocketRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.leverWebsocketRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.leverWebsocketRepository.Update(entity);
    }
};
exports.LeverWebsocketConfigurationServices = LeverWebsocketConfigurationServices;
exports.LeverWebsocketConfigurationServices = LeverWebsocketConfigurationServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lever_websocket_config_repository_1.LeverWebsocketConfigurationRepository])
], LeverWebsocketConfigurationServices);
//# sourceMappingURL=lever-websocket-config.service.js.map