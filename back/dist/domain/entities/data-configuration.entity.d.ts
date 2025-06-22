import { Configuration } from "./configuration.entity";
import { Project } from "./project.entity";
import { ConfigurationProject } from "./configuration-project.entity";
import { JoystickConfiguration } from "./joystick-configuration.entity";
import { MQTTConfiguration } from "./mqtt-configuration.entity";
import { WebSocketConfiguration } from "./websocket-configuration.entity";
import { JoystickWebsocketConfiguration } from "./joystick-websocket-configuration.entity";
import { SwitchWebsocketConfiguration } from "./switch-websocket-configuration.entity";
export declare class DataConfiguration {
    id: number;
    configurationId: number;
    configurationProjectId?: number | null;
    projectId: number | null;
    Project?: Project;
    configuration?: Configuration;
    configurationProject?: ConfigurationProject | null;
    joystickConfiguration?: JoystickConfiguration | null;
    mqttConfiguration?: MQTTConfiguration | null;
    webSocketConfiguration?: WebSocketConfiguration | null;
    joystickWebsocketConfiguration?: JoystickWebsocketConfiguration | null;
    switchWebsocketConfiguration?: SwitchWebsocketConfiguration | null;
    constructor();
}
