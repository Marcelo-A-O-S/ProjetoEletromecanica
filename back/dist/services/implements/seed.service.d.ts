import { OnModuleInit } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
export declare class SeedService implements OnModuleInit {
    private readonly prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    private seedUsers;
    private seedConfigurations;
}
