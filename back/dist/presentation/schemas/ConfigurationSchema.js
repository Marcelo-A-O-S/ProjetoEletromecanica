"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationByIdSchema = exports.DeleteConfigurationByIdSchema = exports.DeleteConfigurationSchema = exports.UpdateConfigurationSchema = exports.SaveConfigurationSchema = void 0;
const zod_1 = require("zod");
exports.SaveConfigurationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    componentKey: zod_1.z.string().nonempty()
});
exports.UpdateConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    componentKey: zod_1.z.string().nonempty()
});
exports.DeleteConfigurationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    componentKey: zod_1.z.string().nonempty()
});
exports.DeleteConfigurationByIdSchema = zod_1.z.object({
    id: zod_1.z.number()
});
exports.ConfigurationByIdSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
//# sourceMappingURL=ConfigurationSchema.js.map