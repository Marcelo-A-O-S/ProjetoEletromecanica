export interface ISwitchWebsocketConfiguration{
    id:number;
    dataConfigurationId:number;
    host:string;
    protocol:'ws://'|'wss://';
    identifier: string;
}