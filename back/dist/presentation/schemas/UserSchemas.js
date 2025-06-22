"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByRolesUserSchema = exports.DeleteByIdUserSchema = exports.DeleteUserSchema = exports.UpdateUserSchema = exports.SaveUserSchema = exports.FindByEmailSchema = void 0;
const zod_1 = require("zod");
exports.FindByEmailSchema = zod_1.z.object({
    email: zod_1.z.string({ message: "Tipo atribuido a propriedade 'email' inválido" })
        .email("Corrija o email informado para continuar!")
        .nonempty("Informe um dado valido para continuar!")
});
exports.SaveUserSchema = zod_1.z.object({
    email: zod_1.z.string({ message: "Tipo atribuido a propriedade 'email' inválido" })
        .email("Conrrija o email informado para continuar!").nonempty("Informe um email válido para continuar"),
    name: zod_1.z.string({ message: "Tipo atribuido a propriedade 'name' inválido" }),
    role: zod_1.z.string({ message: "Tipo atribuido a propriedade 'role' inválido" }),
    password: zod_1.z.string({ message: "Tipo atribuido a propriedade 'password' inválido" })
});
exports.UpdateUserSchema = zod_1.z.object({
    id: zod_1.z.number({ message: "Tipo atribuido a propriedade 'id' inválido" }),
    email: zod_1.z.string({ message: "Tipo atribuido a propriedade 'email' inválido" })
        .email("Conrrija o email informado para continuar!")
        .nonempty("Informe um email válido para continuar"),
    name: zod_1.z.string({ message: "Tipo atribuido a propriedade 'name' inválido" }),
    role: zod_1.z.string({ message: "Tipo atribuido a propriedade 'role' inválido" }),
    password: zod_1.z.string({ message: "Tipo atribuido a propriedade 'password' inválido" })
});
exports.DeleteUserSchema = zod_1.z.object({
    id: zod_1.z.number({ message: "Tipo atribuido a propriedade 'id' inválido" }),
    email: zod_1.z.string({ message: "Tipo atribuido a propriedade 'email' inválido" })
        .email("Conrrija o email informado para continuar!")
        .nonempty("Informe um email válido para continuar"),
    name: zod_1.z.string({ message: "Tipo atribuido a propriedade 'name' inválido" }),
    role: zod_1.z.string({ message: "Tipo atribuido a propriedade 'role' inválido" }),
    password: zod_1.z.string({ message: "Tipo atribuido a propriedade 'password' inválido" })
});
exports.DeleteByIdUserSchema = zod_1.z.object({
    id: zod_1.z.number({ message: "Tipo atribuido a propriedade 'id' inválido" })
});
exports.FindByRolesUserSchema = zod_1.z.object({
    role: zod_1.z.string({ message: "Tipo atribuido a propriedade 'role' inválido" })
});
//# sourceMappingURL=UserSchemas.js.map