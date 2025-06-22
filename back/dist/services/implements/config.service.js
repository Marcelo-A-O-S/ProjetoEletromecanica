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
exports.ConfigurationServices = void 0;
const config_repository_1 = require("../../repositories/implements/config.repository");
const common_1 = require("@nestjs/common");
let ConfigurationServices = class ConfigurationServices {
    configurationRepository;
    constructor(configurationRepository) {
        this.configurationRepository = configurationRepository;
    }
    async Save(entity) {
        return await this.configurationRepository.Save(entity);
    }
    async GetAll() {
        return await this.configurationRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.configurationRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.configurationRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.configurationRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.configurationRepository.Update(entity);
    }
};
exports.ConfigurationServices = ConfigurationServices;
exports.ConfigurationServices = ConfigurationServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_repository_1.ConfigurationRepository])
], ConfigurationServices);
//# sourceMappingURL=config.service.js.map