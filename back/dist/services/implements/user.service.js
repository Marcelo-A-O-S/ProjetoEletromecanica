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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_repository_1 = require("../../repositories/implements/user.repository");
const common_1 = require("@nestjs/common");
let UserServices = class UserServices {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async FindWithPasswordByEmail(email) {
        return await this.userRepository.FindWithPasswordByEmail(email);
    }
    async FindByRole(role) {
        return await this.userRepository.FindByRoles(role);
    }
    async FindByName(name) {
        return await this.userRepository.FindByName(name);
    }
    async FindByEmail(email) {
        return await this.userRepository.FindByEmail(email);
    }
    async Save(entity) {
        return await this.userRepository.Save(entity);
    }
    async GetAll() {
        return await this.userRepository.ListAll();
    }
    async GetbyId(id) {
        return await this.userRepository.GetbyId(id);
    }
    async Delete(entity) {
        return await this.userRepository.Delete(entity);
    }
    async DeleteById(Id) {
        return await this.userRepository.DeleteById(Id);
    }
    async Update(entity) {
        return await this.userRepository.Update(entity);
    }
};
exports.UserServices = UserServices;
exports.UserServices = UserServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserServices);
//# sourceMappingURL=user.service.js.map