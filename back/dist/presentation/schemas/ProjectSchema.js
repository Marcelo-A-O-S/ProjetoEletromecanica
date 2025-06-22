"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectByIdSchema = exports.DeleteProjectByIdSchema = exports.DeleteProjectSchema = exports.UpdateProjectSchema = exports.SaveProjectSchema = void 0;
const zod_1 = require("zod");
exports.SaveProjectSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string()
});
exports.UpdateProjectSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string()
});
exports.DeleteProjectSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string()
});
exports.DeleteProjectByIdSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
exports.ProjectByIdSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
//# sourceMappingURL=ProjectSchema.js.map