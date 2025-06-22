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
exports.UserController = void 0;
const user_service_1 = require("../../services/implements/user.service");
const common_1 = require("@nestjs/common");
const UserSchemas_1 = require("../schemas/UserSchemas");
const user_entity_1 = require("../../domain/entities/user.entity");
const auth_guard_1 = require("../guards/auth.guard");
const roles_decorators_1 = require("../decorators/roles.decorators");
const authorize_guard_1 = require("../guards/authorize.guard");
let UserController = class UserController {
    userServices;
    constructor(userServices) {
        this.userServices = userServices;
    }
    async findByRoles(role) {
        if (!role) {
            throw new common_1.HttpException("Role is required", common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.userServices.FindByRole(role);
    }
    async findByEmail(email) {
        if (!email) {
            throw new common_1.HttpException("Email is required", common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userServices.FindByEmail(email);
        if (!user) {
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async getById(id) {
        const numericId = Number(id);
        if (!id || isNaN(numericId)) {
            throw new common_1.HttpException("ID must be a valid number", common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userServices.GetbyId(numericId);
        if (!user) {
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async listAll() {
        return await this.userServices.GetAll();
    }
    async save(body) {
        try {
            const resultSchema = await UserSchemas_1.SaveUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { email, name, role, password } = resultSchema.data;
            const user = new user_entity_1.User();
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Save(user);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return {
                    message: result.message,
                };
            }
        }
        catch (err) {
            throw new common_1.HttpException(`Internal server erro: ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(body) {
        try {
            const resultSchema = await UserSchemas_1.UpdateUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id, email, name, role, password } = resultSchema.data;
            const user = new user_entity_1.User();
            user.id = id;
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Save(user);
            if (result.entity.id == 0) {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                return {
                    message: result.message,
                };
            }
        }
        catch (err) {
            throw new common_1.HttpException(`Internal server erro: ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(body) {
        try {
            const resultSchema = await UserSchemas_1.DeleteUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new common_1.HttpException(resultSchema.error, common_1.HttpStatus.BAD_REQUEST);
            }
            const { id, email, name, role, password } = resultSchema.data;
            const user = new user_entity_1.User();
            user.id = id;
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Delete(user);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException(`Internal server erro: ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteById(id) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new common_1.HttpException("ID must be a valid number", common_1.HttpStatus.BAD_REQUEST);
            }
            const result = await this.userServices.DeleteById(numericId);
            return result;
        }
        catch (err) {
            throw new common_1.HttpException(`Internal server erro: ${err}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('find-by-role'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByRoles", null);
__decorate([
    (0, common_1.Get)('find-by-email'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, roles_decorators_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listAll", null);
__decorate([
    (0, common_1.Post)('save'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('delete-by-id'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, authorize_guard_1.AuthorizeGuard),
    __metadata("design:paramtypes", [user_service_1.UserServices])
], UserController);
//# sourceMappingURL=user.controller.js.map