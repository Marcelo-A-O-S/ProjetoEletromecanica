import { ILeverWebsocketConfiguration } from "../interfaces/ILeverWebsocketConfiguration";

export class LeverWebsocketConfiguration implements ILeverWebsocketConfiguration{
    id: number;
    dataConfigurationId: number;
    host: string;
    protocol: "ws://" | "wss://";
    identifier: string;
    constructor(){
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
        this.identifier = ""
    }

}