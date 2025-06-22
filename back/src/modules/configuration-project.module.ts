import { Module } from "@nestjs/common";
import { ConfigurationProjectController } from "../presentation/controllers/configuration-project.controller";
import { ConfigurationProjectRepository } from "../repositories/implements/config-project.repository";
import { ConfigurationProjectServices } from "../services/implements/config-project.service";

@Module({
    controllers:[ConfigurationProjectController],
    providers:[ConfigurationProjectServices,ConfigurationProjectRepository]
})
export class ConfigurationProjectModule{}