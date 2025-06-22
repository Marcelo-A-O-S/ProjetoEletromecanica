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
exports.ConfigurationProjectServices = void 0;
const config_project_repository_1 = require("../../repositories/implements/config-project.repository");
const common_1 = require("@nestjs/common");
let ConfigurationProjectServices = class ConfigurationProjectServices {
    configurationProjectRepository;
    constructor(configurationProjectRepository) {
        this.configurationProjectRepository = configurationProjectRepository;
    }
    async Save(entity) {
        return await this.configurationProjectRepository.Save(entity);
    }
    async GetAll() {
        return await this.configurationProjectRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.configurationProjectRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.configurationProjectRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.configurationProjectRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.configurationProjectRepository.Update(entity);
    }
};
exports.ConfigurationProjectServices = ConfigurationProjectServices;
exports.ConfigurationProjectServices = ConfigurationProjectServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_project_repository_1.ConfigurationProjectRepository])
], ConfigurationProjectServices);
//# sourceMappingURL=config-project.service.js.map