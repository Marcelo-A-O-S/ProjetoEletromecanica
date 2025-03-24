import { IDataConfiguration } from "../interfaces/IDataConfiguration";
import { Configuration } from "./Configuration";
import { JoystickWebSocketConfiguration } from "./JoystickWebsocketConfiguration";
import { Project } from "./Project";

export class DataConfiguration implements IDataConfiguration{
    id: number;
    configurationId: number;
    projectId: number | null;
    project?: Project | undefined;
    configuration?: Configuration | undefined;
    joystickWebsocketConfiguration?: JoystickWebSocketConfiguration | undefined;
    constructor(){
        this.id = 0;
        this.configurationId = 0;
        this.projectId = 0;
    }

}