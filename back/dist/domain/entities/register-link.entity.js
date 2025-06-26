"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterLink = void 0;
const uuid_1 = require("uuid");
class RegisterLink {
    id;
    description;
    token;
    urlRegister;
    constructor() {
        this.id = 0;
        this.description = "";
        this.token = "";
        this.urlRegister = "";
    }
    generateToken() {
        this.token = (0, uuid_1.v4)();
    }
}
exports.RegisterLink = RegisterLink;
//# sourceMappingURL=register-link.entity.js.map