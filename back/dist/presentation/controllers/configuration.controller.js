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
exports.ConfigurationController = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../services/implements/config.service");
const ConfigurationSchema_1 = require("../schemas/ConfigurationSchema");
const configuration_entity_1 = require("../../domain/entities/configuration.entity");
const auth_guard_1 = require("../guards/auth.guard");
const authorize_guard_1 = require("../guards/authorize.guard");
const roles_decorators_1 = require("../decorators/roles.decorators");
let ConfigurationController = class ConfigurationController {
    configurationServices;
    constructor(configurationServices) {
        this.configurationServices = configurationServices;
    }
    async GetById(id) {
        const numericId = Number(id);
        if (!id || isNaN(numericId)) {
            throw new common_1.HttpException("ID must be a valid number", common_1.HttpStatus.BAD_REQUEST);
        }
        const resultSchema = await ConfigurationSchema_1.ConfigurationByIdSchema.safeParseAsync({ id: numericId });
        if (!resultSchema.success) {
            throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
        }
        const { id: configurationId } = resultSchema.data;
        try {
            const result = await this.configurationServices.GetbyId(configurationId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async ListAll() {
        try {
            return await this.configurationServices.GetAll();
        }
        catch (err) {
            throw new common_1.HttpException(`Erro interno no servidor: ${err}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Save(body) {
        const resultSchema = await ConfigurationSchema_1.SaveConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
        }
        const { description, name, componentKey } = resultSchema.data;
        const configuration = new configuration_entity_1.Configuration();
        configuration.id = 0;
        configuration.name = name;
        configuration.description = description;
        configuration.componentKey = componentKey;
        try {
            const result = await this.configurationServices.Save(configuration);
            if (result.entity.id === 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.message;
            }
        }
        catch (err) {
            throw new common_1.HttpException('Erro interno no servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Update(body) {
        const resultSchema = await ConfigurationSchema_1.UpdateConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
        }
        const { description, name, id, componentKey } = resultSchema.data;
        const configuration = new configuration_entity_1.Configuration();
        configuration.id = id;
        configuration.name = name;
        configuration.description = description;
        configuration.componentKey = componentKey;
        const result = await this.configurationServices.Save(configuration);
        try {
            if (result.entity.id === 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.message;
            }
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Delete(body) {
        const resultSchema = await ConfigurationSchema_1.DeleteConfigurationSchema.safeParseAsync(body);
        if (!resultSchema.success) {
            throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
        }
        const { id, description, name } = resultSchema.data;
        try {
            const result = await this.configurationServices.DeleteById(id);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException('Erro interno no servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async DeleteById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("ID must be a valid number", common_1.HttpStatus.BAD_REQUEST);
            }
            const result = await this.configurationServices.DeleteById(numericId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ConfigurationController = ConfigurationController;
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "GetById", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "ListAll", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "Save", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "Delete", null);
__decorate([
    (0, common_1.Delete)('delete-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "DeleteById", null);
exports.ConfigurationController = ConfigurationController = __decorate([
    (0, common_1.Controller)("configuration"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, authorize_guard_1.AuthorizeGuard),
    __metadata("design:paramtypes", [config_service_1.ConfigurationServices])
], ConfigurationController);
//# sourceMappingURL=configuration.controller.js.map