"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConfigurationProjectByIdSchema = exports.DeleteConfigurationProjectByIdSchema = exports.DeleteConfigurationProjectSchema = exports.UpdateConfigurationProjectSchema = exports.SaveConfigurationProjectSchema = void 0;
const zod_1 = require("zod");
exports.SaveConfigurationProjectSchema = zod_1.z.object({
    projectId: zod_1.z.number().min(1, { message: "Não existe registro de projeto nulo" }),
    configurationId: zod_1.z.number().min(1, { message: "Não existe registro de configuração nulo." }),
    description: zod_1.z.string()
});
exports.UpdateConfigurationProjectSchema = zod_1.z.object({
    id: zod_1.z.number().min(1, { message: "Não há como atualizar um registro nulo" }),
    projectId: zod_1.z.number().min(1, { message: "Não existe registro de projeto nulo" }),
    configurationId: zod_1.z.number().min(1, { message: "Não existe registro de configuração nulo." }),
    description: zod_1.z.string()
});
exports.DeleteConfigurationProjectSchema = zod_1.z.object({
    id: zod_1.z.number().min(1, { message: "Não há como deletar um registro nulo" }),
    projectId: zod_1.z.number().min(1, { message: "Não existe registro de projeto nulo" }),
    configurationId: zod_1.z.number().min(1, { message: "Não existe registro de configuração nulo." }),
    description: zod_1.z.string()
});
exports.DeleteConfigurationProjectByIdSchema = zod_1.z.object({
    id: zod_1.z.number().min(1, { message: "Não há como deletar um registro nulo" }),
});
exports.GetConfigurationProjectByIdSchema = zod_1.z.object({
    id: zod_1.z.number().min(1, { message: "Não existe um registro nulo" }),
});
//# sourceMappingURL=ConfigurationProjectSchema.js.map