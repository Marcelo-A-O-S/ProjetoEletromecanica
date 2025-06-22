"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string({ message: "Tipo de dado inválido!" }).email("Informe um email válido").nonempty("Informe o email solicitado para continuar"),
    password: zod_1.z.string({ message: "Tipo de dado inválido!" })
});
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string({ message: "Tipo de dado inválido!" }).email("Informe um email válido").nonempty("Informe o email solicitado para continuar"),
    password: zod_1.z.string({ message: "Tipo de dado inválido!" }),
    name: zod_1.z.string({ message: "Tipo de dado inválido!" }),
    role: zod_1.z.string({ message: "Tipo de dado inválido!" })
});
//# sourceMappingURL=AuthSchemas.js.map