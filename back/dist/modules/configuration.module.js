"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationModule = void 0;
const common_1 = require("@nestjs/common");
const configuration_controller_1 = require("../presentation/controllers/configuration.controller");
const config_repository_1 = require("../repositories/implements/config.repository");
const config_service_1 = require("../services/implements/config.service");
const auth_module_1 = require("./auth.module");
let ConfigurationModule = class ConfigurationModule {
};
exports.ConfigurationModule = ConfigurationModule;
exports.ConfigurationModule = ConfigurationModule = __decorate([
    (0, common_1.Module)({
        controllers: [configuration_controller_1.ConfigurationController],
        providers: [config_service_1.ConfigurationServices, config_repository_1.ConfigurationRepository],
        imports: [auth_module_1.AuthModule]
    })
], ConfigurationModule);
//# sourceMappingURL=configuration.module.js.map