"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoystickWebsocketConfiguration = void 0;
class JoystickWebsocketConfiguration {
    id;
    dataConfigurationId;
    identifier;
    host;
    protocol;
    dataConfiguration;
    constructor() {
        this.id = 0;
        this.dataConfigurationId = 0;
        this.host = "";
        this.protocol = "ws://";
        this.identifier = "";
    }
}
exports.JoystickWebsocketConfiguration = JoystickWebsocketConfiguration;
//# sourceMappingURL=joystick-websocket-configuration.entity.js.map