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
exports.ConfigurationProjectController = void 0;
const common_1 = require("@nestjs/common");
const config_project_service_1 = require("../../services/implements/config-project.service");
const ConfigurationProjectSchema_1 = require("../schemas/ConfigurationProjectSchema");
const configuration_project_entity_1 = require("../../domain/entities/configuration-project.entity");
let ConfigurationProjectController = class ConfigurationProjectController {
    configurationProjectServices;
    constructor(configurationProjectServices) {
        this.configurationProjectServices = configurationProjectServices;
    }
    async GetById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("ID must be a number valid", common_1.HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await ConfigurationProjectSchema_1.GetConfigurationProjectByIdSchema.safeParseAsync(numericId);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id: configurationProjectId } = resultSchema.data;
            const result = await this.configurationProjectServices.GetbyId(configurationProjectId);
            if (result.id == 0) {
                throw new common_1.HttpException("Not Found.", common_1.HttpStatus.NOT_FOUND);
            }
            else {
                return result;
            }
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async ListAll() {
        try {
            const listConfigurations = await this.configurationProjectServices.GetAll();
            return listConfigurations;
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Save(body) {
        try {
            const resultSchema = await ConfigurationProjectSchema_1.SaveConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { configurationId, projectId, description } = resultSchema.data;
            const configurationProject = new configuration_project_entity_1.ConfigurationProject();
            configurationProject.id = 0;
            configurationProject.configurationId = configurationId;
            configurationProject.projectId = projectId;
            configurationProject.description = description;
            const result = await this.configurationProjectServices.Save(configurationProject);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.message;
            }
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Update(body) {
        try {
            const resultSchema = await ConfigurationProjectSchema_1.UpdateConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { configurationId, description, id, projectId } = resultSchema.data;
            const configurationProject = new configuration_project_entity_1.ConfigurationProject();
            configurationProject.id = id;
            configurationProject.configurationId = configurationId;
            configurationProject.projectId = projectId;
            configurationProject.description = description;
            const result = await this.configurationProjectServices.Save(configurationProject);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.message;
            }
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Delete(body) {
        try {
            const resultSchema = await ConfigurationProjectSchema_1.DeleteConfigurationProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id } = resultSchema.data;
            const result = await this.configurationProjectServices.DeleteById(id);
            return result;
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async DeleteById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("Id must be a number valid", common_1.HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await ConfigurationProjectSchema_1.DeleteConfigurationProjectByIdSchema.safeParseAsync(numericId);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id: configurationProjectId } = resultSchema.data;
            const result = await this.configurationProjectServices.DeleteById(configurationProjectId);
            return result;
        }
        catch (e) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ConfigurationProjectController = ConfigurationProjectController;
__decorate([
    (0, common_1.Get)('get-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "GetById", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "ListAll", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "Save", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "Delete", null);
__decorate([
    (0, common_1.Delete)('delete-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigurationProjectController.prototype, "DeleteById", null);
exports.ConfigurationProjectController = ConfigurationProjectController = __decorate([
    (0, common_1.Controller)('configurationProject'),
    __metadata("design:paramtypes", [config_project_service_1.ConfigurationProjectServices])
], ConfigurationProjectController);
//# sourceMappingURL=configuration-project.controller.js.map