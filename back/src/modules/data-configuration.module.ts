import { Module } from "@nestjs/common";
import { DataConfigurationController } from "../presentation/controllers/data-configuration.controller";
import { DataConfigurationRepository } from "../repositories/implements/data-config.repository";
import { DataConfigurationServices } from "../services/implements/data-config.service";
import { JoystickWebSocketConfigurationServices } from "src/services/implements/joystick-websocket-config.service";
import { JoystickWebSocketConfigurationRepository } from "src/repositories/implements/joystick-websocket-config.repository";
import { SwitchWebsocketConfigurationServices } from "src/services/implements/switch-websocket-config.service";
import { SwitchWebsocketConfigurationRepository } from "src/repositories/implements/switch-websocket-config.repository";
import { LeverWebsocketConfigurationServices } from "src/services/implements/lever-websocket-config.service";
import { LeverWebsocketConfigurationRepository } from "src/repositories/implements/lever-websocket-config.repository";
@Module({
    controllers: [DataConfigurationController],
    providers: [DataConfigurationServices,
        DataConfigurationRepository,
        JoystickWebSocketConfigurationServices,
        JoystickWebSocketConfigurationRepository,
        SwitchWebsocketConfigurationServices,
        SwitchWebsocketConfigurationRepository,
        LeverWebsocketConfigurationServices,
        LeverWebsocketConfigurationRepository
    ]
})

export class DataConfigurationModule { }