import { Module } from "@nestjs/common";
import { DataConfigurationController } from "../presentation/controllers/data-configuration.controller";
import { DataConfigurationRepository } from "../repositories/implements/data-config.repository";
import { DataConfigurationServices } from "../services/implements/data-config.service";

@Module({
    controllers:[DataConfigurationController],
    providers:[DataConfigurationServices, DataConfigurationRepository]
})

export class DataConfigurationModule{}