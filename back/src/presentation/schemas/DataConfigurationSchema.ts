import { z } from "zod";
import { DataConfiguration } from "src/domain/entities/data-configuration.entity";
export const joystickWebSocketConfigurationSchema = z.object({
    id: z.number(),
    dataConfigurationId: z.number().optional(),
    host: z.string(),
    protocol: z.string(),
    identifier: z.string()
});
export const switchWebsocketConfigurationSchema = z.object({
    id: z.number(),
    dataConfigurationId: z.number().optional(),
    host: z.string(),
    protocol: z.string(),
    identifier: z.string()
});
export const leverWebsocketConfigurationSchema = z.object({
    id: z.number(),
    dataConfigurationId: z.number().optional(),
    host: z.string(),
    protocol: z.string(),
    identifier: z.string()
});
export const dataConfigurationSchema = z.object({
    id: z.number(),
    configurationId: z.number(),
    projectId: z.number().nullable(),
    configurationProjectId: z.number().nullable(),
    joystickWebsocketConfiguration: joystickWebSocketConfigurationSchema.nullable().optional(),
    switchWebsocketConfiguration: switchWebsocketConfigurationSchema.nullable().optional(),
    leverWebsocketConfiguration: leverWebsocketConfigurationSchema.nullable().optional()
})
export const SaveDataConfigurationSchema = z.object({
    componentKey: z.string().nonempty(),
    dataConfiguration: dataConfigurationSchema
})

export const UpdateDataConfigurationSchema = z.object({
    componentKey: z.string().nonempty(),
    dataConfiguration: dataConfigurationSchema
})
export const DataConfigurationByIdSchema = z.object({
    id: z.number(),
})

export type DataConfigurationSchema = z.infer<typeof dataConfigurationSchema>
export type JoystickWebSocketConfigurationSchema = z.infer<typeof joystickWebSocketConfigurationSchema>
export type SwitchWebsocketConfigurationSchema = z.infer<typeof switchWebsocketConfigurationSchema>
export type LeverWebsocketConfigurationSchema = z.infer<typeof leverWebsocketConfigurationSchema>