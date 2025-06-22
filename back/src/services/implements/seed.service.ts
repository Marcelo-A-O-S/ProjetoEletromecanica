import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { FORMS } from "src/domain/constants/forms.constants";

@Injectable()
export class SeedService implements OnModuleInit {
    constructor(private readonly prisma: PrismaService) { }
    onModuleInit() {
        this.seedUsers();
        this.seedConfigurations();
    }
    private async seedUsers() {
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
    private async seedConfigurations() {
        const configs = [
            {
                componentKey: FORMS.formJoystickWebsocket,
                name: 'Joystick via websocket',
                description: 'Configuração de joystick usando websocket',
            },
            {
                componentKey: FORMS.formSwitchWebsocket,
                name: 'Interruptor via websocket',
                description: 'Configuração para ativação(ON) e desativação(OFF) de componente',
            },
            {
                componentKey: FORMS.formLeverWebsocket,
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

}