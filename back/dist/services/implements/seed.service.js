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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
const forms_constants_1 = require("../../domain/constants/forms.constants");
let SeedService = class SeedService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        this.seedUsers();
        this.seedConfigurations();
    }
    async seedUsers() {
        const users = [
            { email: 'admin@admin.com', name: 'admin', role: 'admin', password: '12345678' },
            { email: 'user@user.com', name: 'user', role: 'user', password: '12345678' },
            { email: 'operator@operator.com', name: 'operator', role: 'operator', password: '12345678' },
        ];
        for (const user of users) {
            const exists = await this.prisma.user.findFirst({ where: { email: user.email } });
            if (!exists) {
                const hashed = await bcrypt.hash(user.password, 10);
                await this.prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name,
                        password: hashed,
                        role: user.role,
                    },
                });
            }
        }
    }
    async seedConfigurations() {
        const configs = [
            {
                componentKey: forms_constants_1.FORMS.formJoystickWebsocket,
                name: 'Joystick via websocket',
                description: 'Configuração de joystick usando websocket',
            },
            {
                componentKey: forms_constants_1.FORMS.formSwitchWebsocket,
                name: 'Interruptor via websocket',
                description: 'Configuração para ativação(ON) e desativação(OFF) de componente',
            },
            {
                componentKey: forms_constants_1.FORMS.formLeverWebsocket,
                name: 'Alavanca no eixo Y via websocket',
                description: 'Configuração de joystick que permite direcionamento apenas no eixo Y (Cima/baixo).',
            },
        ];
        for (const config of configs) {
            const exists = await this.prisma.configuration.findFirst({
                where: { componentKey: config.componentKey },
            });
            if (!exists) {
                await this.prisma.configuration.create({ data: config });
            }
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeedService);
//# sourceMappingURL=seed.service.js.map