import { Module } from "@nestjs/common";
import { ConfigurationController } from "../presentation/controllers/configuration.controller";
import { ConfigurationRepository } from "../repositories/implements/config.repository";
import { ConfigurationServices } from "../services/implements/config.service";
import { AuthModule } from "./auth.module";

@Module({
    controllers:[ConfigurationController],
    providers:[ConfigurationServices, ConfigurationRepository],
    imports:[AuthModule]
})
export class ConfigurationModule {}