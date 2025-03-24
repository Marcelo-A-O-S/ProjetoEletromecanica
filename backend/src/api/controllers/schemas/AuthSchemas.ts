import { z } from "zod";
export const loginSchema = z.object({
    email: z.string({message: "Tipo de dado inválido!"}).email("Informe um email válido").nonempty("Informe o email solicitado para continuar"),
    password: z.string({message: "Tipo de dado inválido!"})
})
export const registerSchema = z.object({
    email: z.string({message: "Tipo de dado inválido!"}).email("Informe um email válido").nonempty("Informe o email solicitado para continuar"),
    password: z.string({message: "Tipo de dado inválido!"}),
    name: z.string({message: "Tipo de dado inválido!"}),
    role: z.string({message: "Tipo de dado inválido!"})
})