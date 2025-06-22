"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConfigurationByIdSchema = exports.UpdateDataConfigurationSchema = exports.SaveDataConfigurationSchema = exports.dataConfigurationSchema = exports.leverWebsocketConfigurationSchema = exports.switchWebsocketConfigurationSchema = exports.joystickWebSocketConfigurationSchema = void 0;
const zod_1 = require("zod");
exports.joystickWebSocketConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    dataConfigurationId: zod_1.z.number().optional(),
    host: zod_1.z.string(),
    protocol: zod_1.z.string(),
    identifier: zod_1.z.string()
});
exports.switchWebsocketConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    dataConfigurationId: zod_1.z.number().optional(),
    host: zod_1.z.string(),
    protocol: zod_1.z.string(),
    identifier: zod_1.z.string()
});
exports.leverWebsocketConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    dataConfigurationId: zod_1.z.number().optional(),
    host: zod_1.z.string(),
    protocol: zod_1.z.string(),
    identifier: zod_1.z.string()
});
exports.dataConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    configurationId: zod_1.z.number(),
    projectId: zod_1.z.number().nullable(),
    configurationProjectId: zod_1.z.number().nullable(),
    joystickWebsocketConfiguration: exports.joystickWebSocketConfigurationSchema.nullable().optional(),
    switchWebsocketConfiguration: exports.switchWebsocketConfigurationSchema.nullable().optional(),
    leverWebsocketConfiguration: exports.leverWebsocketConfigurationSchema.nullable().optional()
});
exports.SaveDataConfigurationSchema = zod_1.z.object({
    componentKey: zod_1.z.string().nonempty(),
    dataConfiguration: exports.dataConfigurationSchema
});
exports.UpdateDataConfigurationSchema = zod_1.z.object({
    componentKey: zod_1.z.string().nonempty(),
    dataConfiguration: exports.dataConfigurationSchema
});
exports.DataConfigurationByIdSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
//# sourceMappingURL=DataConfigurationSchema.js.map