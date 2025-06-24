"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auth.module");
const seed_service_1 = require("./services/implements/seed.service");
const project_module_1 = require("./modules/project.module");
const configuration_module_1 = require("./modules/configuration.module");
const configuration_project_module_1 = require("./modules/configuration-project.module");
const data_configuration_module_1 = require("./modules/data-configuration.module");
const user_module_1 = require("./modules/user.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, prisma_module_1.PrismaModule, config_1.ConfigModule.forRoot({ isGlobal: true }), project_module_1.ProjectModule, configuration_module_1.ConfigurationModule, configuration_project_module_1.ConfigurationProjectModule, user_module_1.UserModule, data_configuration_module_1.DataConfigurationModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, seed_service_1.SeedService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map