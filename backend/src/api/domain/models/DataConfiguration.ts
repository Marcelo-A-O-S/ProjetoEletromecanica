import { Configuration } from "./Configuration";
import { JoystickConfiguration } from "./JoystickConfiguration";
import { JoystickWebSocketConfiguration } from "./JoystickWebSocketConfiguration";
import { MQTTConfiguration } from "./MQTTConfiguration";
import { Project } from "./Project";
import { WebSocketConfiguration } from "./WebSocketConfiguration";

export class DataConfiguration{
    id:number;
    configurationId:number;
    projectId:number | null;
    Project?: Project;
    configuration?:Configuration;
    joystickConfiguration?: JoystickConfiguration | null;
    mqttConfiguration?: MQTTConfiguration | null;
    webSocketConfiguration?: WebSocketConfiguration | null;
    joystickWebsocketConfiguration?: JoystickWebSocketConfiguration | null;
    constructor(){
        this.id = 0;
        this.configurationId = 0;
        this.projectId = null;
        
    }
}