"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeverWebsocketConfiguration = void 0;
class LeverWebsocketConfiguration {
    id;
    identifier;
    dataConfigurationId;
    protocol;
    host;
    dataConfiguration;
    constructor() {
        this.dataConfigurationId = 0;
        this.host = "";
        this.identifier = "";
        this.protocol = "ws://";
        this.id = 0;
    }
}
exports.LeverWebsocketConfiguration = LeverWebsocketConfiguration;
//# sourceMappingURL=lever-websocket-config.entity.js.map