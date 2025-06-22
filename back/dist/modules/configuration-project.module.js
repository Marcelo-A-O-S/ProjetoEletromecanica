"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationProjectModule = void 0;
const common_1 = require("@nestjs/common");
const configuration_project_controller_1 = require("../presentation/controllers/configuration-project.controller");
const config_project_repository_1 = require("../repositories/implements/config-project.repository");
const config_project_service_1 = require("../services/implements/config-project.service");
let ConfigurationProjectModule = class ConfigurationProjectModule {
};
exports.ConfigurationProjectModule = ConfigurationProjectModule;
exports.ConfigurationProjectModule = ConfigurationProjectModule = __decorate([
    (0, common_1.Module)({
        controllers: [configuration_project_controller_1.ConfigurationProjectController],
        providers: [config_project_service_1.ConfigurationProjectServices, config_project_repository_1.ConfigurationProjectRepository]
    })
], ConfigurationProjectModule);
//# sourceMappingURL=configuration-project.module.js.map