"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const auth_controller_1 = require("../presentation/controllers/auth.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/implements/user.service");
const user_repository_1 = require("../repositories/implements/user.repository");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("../services/implements/auth.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.getOrThrow('JWT_SECRET'),
                    signOptions: { expiresIn: '7d' }
                })
            })],
        controllers: [auth_controller_1.AuthController],
        providers: [user_service_1.UserServices, user_repository_1.UserRepository, auth_service_1.AuthService],
        exports: [user_service_1.UserServices, auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map