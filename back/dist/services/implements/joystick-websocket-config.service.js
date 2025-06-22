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
exports.JoystickWebSocketConfigurationServices = void 0;
const joystick_websocket_config_repository_1 = require("../../repositories/implements/joystick-websocket-config.repository");
const common_1 = require("@nestjs/common");
let JoystickWebSocketConfigurationServices = class JoystickWebSocketConfigurationServices {
    joystickWebSocketConfigurationRepository;
    constructor(joystickWebSocketConfigurationRepository) {
        this.joystickWebSocketConfigurationRepository = joystickWebSocketConfigurationRepository;
    }
    async Save(entity) {
        return await this.joystickWebSocketConfigurationRepository.Save(entity);
    }
    async GetAll() {
        return await this.joystickWebSocketConfigurationRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.joystickWebSocketConfigurationRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.joystickWebSocketConfigurationRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.joystickWebSocketConfigurationRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.joystickWebSocketConfigurationRepository.Update(entity);
    }
};
exports.JoystickWebSocketConfigurationServices = JoystickWebSocketConfigurationServices;
exports.JoystickWebSocketConfigurationServices = JoystickWebSocketConfigurationServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [joystick_websocket_config_repository_1.JoystickWebSocketConfigurationRepository])
], JoystickWebSocketConfigurationServices);
//# sourceMappingURL=joystick-websocket-config.service.js.map