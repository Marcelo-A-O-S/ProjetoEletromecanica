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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const AuthSchemas_1 = require("../schemas/AuthSchemas");
const auth_service_1 = require("../../services/implements/auth.service");
let AuthController = class AuthController {
    authServices;
    constructor(authServices) {
        this.authServices = authServices;
    }
    async login(body) {
        try {
            const resultSchema = await AuthSchemas_1.loginSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { email, password } = resultSchema.data;
            return await this.authServices.login(email, password);
        }
        catch (err) {
            throw new common_1.HttpException(`Erro interno no servidor.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async register(body) {
        try {
            const resultSchema = await AuthSchemas_1.registerSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { email, name, password, role } = resultSchema.data;
            return await this.authServices.register(email, password, name);
        }
        catch (err) {
            throw new common_1.HttpException(`Erro interno no servidor.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map