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
exports.DataConfigurationServices = void 0;
const data_config_repository_1 = require("../../repositories/implements/data-config.repository");
const common_1 = require("@nestjs/common");
let DataConfigurationServices = class DataConfigurationServices {
    dataConfigurationRepository;
    constructor(dataConfigurationRepository) {
        this.dataConfigurationRepository = dataConfigurationRepository;
    }
    async Save(entity) {
        return await this.dataConfigurationRepository.Save(entity);
    }
    async GetAll() {
        return await this.dataConfigurationRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.dataConfigurationRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.dataConfigurationRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.dataConfigurationRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.dataConfigurationRepository.Update(entity);
    }
};
exports.DataConfigurationServices = DataConfigurationServices;
exports.DataConfigurationServices = DataConfigurationServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_config_repository_1.DataConfigurationRepository])
], DataConfigurationServices);
//# sourceMappingURL=data-config.service.js.map