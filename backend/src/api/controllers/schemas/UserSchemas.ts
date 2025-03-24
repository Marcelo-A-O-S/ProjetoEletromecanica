import { z } from "zod";

export const FindByEmailSchema = z.object({
    email: z.string({message: "Tipo atribuido a propriedade 'email' inválido"})
    .email("Corrija o email informado para continuar!")
    .nonempty("Informe um dado valido para continuar!")
})
export const SaveUserSchema = z.object({
    email: z.string({message: "Tipo atribuido a propriedade 'email' inválido"})
    .email("Conrrija o email informado para continuar!").nonempty("Informe um email válido para continuar"),
    name: z.string({message:"Tipo atribuido a propriedade 'name' inválido"}),
    role: z.string({message: "Tipo atribuido a propriedade 'role' inválido"}),
    password: z.string({message: "Tipo atribuido a propriedade 'password' inválido"})
})
export const UpdateUserSchema = z.object({
    id: z.number({message:"Tipo atribuido a propriedade 'id' inválido"}),
    email: z.string({message: "Tipo atribuido a propriedade 'email' inválido"})
    .email("Conrrija o email informado para continuar!")
    .nonempty("Informe um email válido para continuar"),
    name: z.string({message:"Tipo atribuido a propriedade 'name' inválido"}),
    role: z.string({message: "Tipo atribuido a propriedade 'role' inválido"}),
    password: z.string({message: "Tipo atribuido a propriedade 'password' inválido"})
})
export const DeleteUserSchema = z.object({
    id: z.number({message:"Tipo atribuido a propriedade 'id' inválido"}),
    email: z.string({message: "Tipo atribuido a propriedade 'email' inválido"})
    .email("Conrrija o email informado para continuar!")
    .nonempty("Informe um email válido para continuar"),
    name: z.string({message:"Tipo atribuido a propriedade 'name' inválido"}),
    role: z.string({message: "Tipo atribuido a propriedade 'role' inválido"}),
    password: z.string({message: "Tipo atribuido a propriedade 'password' inválido"})
})
export const DeleteByIdUserSchema = z.object({
    id: z.number({message:"Tipo atribuido a propriedade 'id' inválido"})
})
export const FindByRolesUserSchema = z.object({
    role: z.string({message:"Tipo atribuido a propriedade 'role' inválido"})
})