import { IDataConfiguration } from "../interfaces/IDataConfiguration";
import { Configuration } from "./Configuration";
import { ConfigurationProject } from "./ConfigurationProject";
import { JoystickWebsocketConfiguration } from "./JoystickWebsocketConfiguration";
import { LeverWebsocketConfiguration } from "./LeverWebsocketConfiguration";
import { Project } from "./Project";
import { SwitchWebsocketConfiguration } from "./SwitchWebsocketConfiguration";

export class DataConfiguration implements IDataConfiguration{
    id: number;
    configurationId: number;
    projectId: number | null;
    configurationProjectId?: number | null;
    project?: Project | undefined;
    configuration?: Configuration | undefined;
    configurationProject?:ConfigurationProject | undefined;
    joystickWebsocketConfiguration?: JoystickWebsocketConfiguration | undefined;
    switchWebsocketConfiguration?: SwitchWebsocketConfiguration | undefined;
    leverWebsocketConfiguration?: LeverWebsocketConfiguration | undefined;
    constructor(){
        this.id = 0;
        this.configurationId = 0;
        this.projectId = 0;
    }

}