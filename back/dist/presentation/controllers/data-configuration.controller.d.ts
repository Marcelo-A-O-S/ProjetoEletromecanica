import { DataConfigurationServices } from "src/services/implements/data-config.service";
import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
import { JoystickWebSocketConfigurationServices } from "src/services/implements/joystick-websocket-config.service";
import { SwitchWebsocketConfigurationServices } from "src/services/implements/switch-websocket-config.service";
import { LeverWebsocketConfigurationServices } from "src/services/implements/lever-websocket-config.service";
export declare class DataConfigurationController {
    private readonly dataConfigurationServices;
    private readonly joystickWebSocketConfigurationServices;
    private readonly switchWebsocketConfigurationServices;
    private readonly leverWebsocketConfigurationServices;
    constructor(dataConfigurationServices: DataConfigurationServices, joystickWebSocketConfigurationServices: JoystickWebSocketConfigurationServices, switchWebsocketConfigurationServices: SwitchWebsocketConfigurationServices, leverWebsocketConfigurationServices: LeverWebsocketConfigurationServices);
    GetById(id: string): Promise<DataConfiguration>;
    ListAll(): Promise<DataConfiguration[]>;
    DeleteById(id: string): Promise<string>;
    Delete(body: any): Promise<string>;
    Save(body: any): Promise<string>;
    Update(body: any): Promise<string>;
    private saveJoystickWebsocketConfiguration;
    private saveSwitchWebsocketConfiguration;
    private saveLeverWebsocketConfiguration;
}
