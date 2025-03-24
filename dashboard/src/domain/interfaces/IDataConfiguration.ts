import { Configuration } from "../models/Configuration";
import { JoystickWebSocketConfiguration } from "../models/JoystickWebsocketConfiguration";
import { Project } from "../models/Project";

export interface IDataConfiguration{
    id:number;
    configurationId:number;
    projectId:number | null;
    project?:Project;
    configuration?: Configuration;
    joystickWebSocketConfiguration?: JoystickWebSocketConfiguration
}
