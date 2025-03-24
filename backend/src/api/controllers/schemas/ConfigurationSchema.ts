import { z } from "zod";

export const SaveConfigurationSchema = z.object({
    name: z.string(),
    description: z.string(),
    componentKey: z.string().nonempty()
})
export const UpdateConfigurationSchema = z.object({
    id: z.number(),
    name: z.string(),
    description : z.string(),
    componentKey: z.string().nonempty()
})
export const DeleteConfigurationSchema = z.object({
    id: z.number(),
    name: z.string(),
    description : z.string(),
    componentKey: z.string().nonempty()
})
export const DeleteConfigurationByIdSchema = z.object({
    id: z.number()
})
export const ConfigurationByIdSchema = z.object({
    id: z.number(),
})