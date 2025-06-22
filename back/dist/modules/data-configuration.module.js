"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConfigurationModule = void 0;
const common_1 = require("@nestjs/common");
const data_configuration_controller_1 = require("../presentation/controllers/data-configuration.controller");
const data_config_repository_1 = require("../repositories/implements/data-config.repository");
const data_config_service_1 = require("../services/implements/data-config.service");
let DataConfigurationModule = class DataConfigurationModule {
};
exports.DataConfigurationModule = DataConfigurationModule;
exports.DataConfigurationModule = DataConfigurationModule = __decorate([
    (0, common_1.Module)({
        controllers: [data_configuration_controller_1.DataConfigurationController],
        providers: [data_config_service_1.DataConfigurationServices, data_config_repository_1.DataConfigurationRepository]
    })
], DataConfigurationModule);
//# sourceMappingURL=data-configuration.module.js.map