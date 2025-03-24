export interface IJoystickWebsocketConfiguration{
    id:number;
    dataConfigurationId:number;
    host:string;
    protocol:'ws://'|'wss://';
}