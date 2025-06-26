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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("../../services/implements/project.service");
const auth_guard_1 = require("../guards/auth.guard");
const authorize_guard_1 = require("../guards/authorize.guard");
const ProjectSchema_1 = require("../schemas/ProjectSchema");
const project_entity_1 = require("../../domain/entities/project.entity");
let ProjectController = class ProjectController {
    projectServices;
    constructor(projectServices) {
        this.projectServices = projectServices;
    }
    async getById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("ID must be a number valid", common_1.HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await ProjectSchema_1.ProjectByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id: projectId } = resultSchema.data;
            const result = await this.projectServices.GetbyId(projectId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAll() {
        try {
            const projects = await this.projectServices.GetAll();
            return projects;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Save(body) {
        try {
            const resultSchema = await ProjectSchema_1.SaveProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { description, name } = resultSchema.data;
            const project = new project_entity_1.Project();
            project.id = 0;
            project.name = name;
            project.description = description;
            const result = await this.projectServices.Save(project);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.entity;
            }
        }
        catch (err) {
            throw new common_1.HttpException("Erro no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Update(body) {
        try {
            const resultSchema = await ProjectSchema_1.UpdateProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { description, id, name } = resultSchema.data;
            const project = new project_entity_1.Project();
            project.id = id;
            project.name = name;
            project.description = description;
            const result = await this.projectServices.Update(project);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return result.entity;
            }
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async Delete(body) {
        try {
            const resultSchema = await ProjectSchema_1.DeleteProjectSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { description, id, name } = resultSchema.data;
            const result = await this.projectServices.DeleteById(id);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException("Erro interno no servidor.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async DeleteById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("Id must be a number valid", common_1.HttpStatus.BAD_REQUEST);
            }
            const resultSchema = await ProjectSchema_1.DeleteProjectByIdSchema.safeParseAsync({ id: numericId });
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id: projectId } = resultSchema.data;
            const result = await this.projectServices.DeleteById(projectId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException(`Erro interno no servidor:${err}.`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.Get)('get-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "Save", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "Delete", null);
__decorate([
    (0, common_1.Delete)('delete-by-id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "DeleteById", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, authorize_guard_1.AuthorizeGuard),
    __metadata("design:paramtypes", [project_service_1.ProjectServices])
], ProjectController);
//# sourceMappingURL=project.controller.js.map