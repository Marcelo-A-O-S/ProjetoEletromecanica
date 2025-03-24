import { z } from "zod";
export const joystickWebSocketConfigurationSchema = z.object({
    id: z.number(),
    dataConfigurationId: z.number().optional(),
    host: z.string(),
    protocol: z.string(),
});
export const dataConfigurationSchema = z.object({
    id: z.number(),
    configurationId: z.number(),
    projectId: z.number().nullable(),
    joystickWebsocketConfiguration: joystickWebSocketConfigurationSchema.nullable().optional()
})
export const SaveDataConfigurationSchema = z.object({
    componentKey: z.string().nonempty(),
    dataConfiguration: dataConfigurationSchema
})

export const UpdateDataConfigurationSchema = z.object({
    componentKey: z.string().nonempty(),
    dataConfiguration: dataConfigurationSchema
})