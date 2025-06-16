import { z } from "zod";

export const SaveConfigurationProjectSchema = z.object({
    projectId: z.number().min(1,{message:"Não existe registro de projeto nulo"}),
    configurationId: z.number().min(1,{message:"Não existe registro de configuração nulo."}),
    description: z.string()
})
export const UpdateConfigurationProjectSchema = z.object({
    id: z.number().min(1,{message:"Não há como atualizar um registro nulo"}),
    projectId: z.number().min(1,{message:"Não existe registro de projeto nulo"}),
    configurationId: z.number().min(1,{message:"Não existe registro de configuração nulo."}),
    description: z.string()
})
export const DeleteConfigurationProjectSchema = z.object({
    id: z.number().min(1,{message:"Não há como deletar um registro nulo"}),
    projectId: z.number().min(1,{message:"Não existe registro de projeto nulo"}),
    configurationId: z.number().min(1,{message:"Não existe registro de configuração nulo."}),
    description: z.string()
})
export const DeleteConfigurationProjectByIdSchema = z.object({
    id: z.number().min(1,{message:"Não há como deletar um registro nulo"}),
})
export const GetConfigurationProjectByIdSchema = z.object({
    id: z.number().min(1,{message:"Não existe um registro nulo"}),
})