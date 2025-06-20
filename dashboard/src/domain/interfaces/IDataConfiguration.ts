import { Configuration } from "../models/Configuration";
import { ConfigurationProject } from "../models/ConfigurationProject";
import { JoystickWebsocketConfiguration } from "../models/JoystickWebsocketConfiguration";
import { LeverWebsocketConfiguration } from "../models/LeverWebsocketConfiguration";
import { Project } from "../models/Project";
import { SwitchWebsocketConfiguration } from "../models/SwitchWebsocketConfiguration";

export interface IDataConfiguration{
    id:number;
    configurationProjectId?: number | null;
    configurationId:number;
    projectId:number | null;
    project?:Project;
    configurationProject?:ConfigurationProject;
    configuration?: Configuration;
    joystickWebsocketConfiguration?: JoystickWebsocketConfiguration;
    switchWebsocketConfiguration?: SwitchWebsocketConfiguration;
    leverWebsocketConfiguration?: LeverWebsocketConfiguration
}
