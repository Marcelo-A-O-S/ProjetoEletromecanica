"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const user_service_1 = require("./user.service");
const user_entity_1 = require("../../domain/entities/user.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userServices;
    jwtService;
    constructor(userServices, jwtService) {
        this.userServices = userServices;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const userData = await this.userServices.FindWithPasswordByEmail(email);
        if (userData.id == 0 || !(await bcrypt.compare(password, userData.password))) {
            throw new common_1.HttpException("Credenciais inválidas!", common_1.HttpStatus.UNAUTHORIZED);
        }
        else {
            const payload = { name: userData.name, email: userData.email, role: userData.role, sub: userData.id };
            const token = this.jwtService.sign(payload);
            return { token };
        }
    }
    async register(email, password, name) {
        const match = await this.userServices.FindByEmail(email);
        if (match.id != 0) {
            throw new common_1.HttpException("Usuário já existe", common_1.HttpStatus.CONFLICT);
        }
        const user = new user_entity_1.User();
        user.email = email;
        user.name = name;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.role = "user";
        const result = await this.userServices.Save(user);
        const payload = { name: result.entity.name, email: result.entity.email, role: result.entity.role, sub: result.entity.id };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    verifyToken(token) {
        try {
            const decode = this.jwtService.verify(token);
            return decode;
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                console.error('Token expirado!');
            }
            else {
                console.error('Token inválido:', error.message);
            }
            return null;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserServices, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map