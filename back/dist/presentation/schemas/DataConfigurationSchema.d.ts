import { z } from "zod";
export declare const joystickWebSocketConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    dataConfigurationId: z.ZodOptional<z.ZodNumber>;
    host: z.ZodString;
    protocol: z.ZodString;
    identifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}>;
export declare const switchWebsocketConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    dataConfigurationId: z.ZodOptional<z.ZodNumber>;
    host: z.ZodString;
    protocol: z.ZodString;
    identifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}>;
export declare const leverWebsocketConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    dataConfigurationId: z.ZodOptional<z.ZodNumber>;
    host: z.ZodString;
    protocol: z.ZodString;
    identifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}, {
    id: number;
    host: string;
    protocol: string;
    identifier: string;
    dataConfigurationId?: number | undefined;
}>;
export declare const dataConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    configurationId: z.ZodNumber;
    projectId: z.ZodNullable<z.ZodNumber>;
    configurationProjectId: z.ZodNullable<z.ZodNumber>;
    joystickWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        dataConfigurationId: z.ZodOptional<z.ZodNumber>;
        host: z.ZodString;
        protocol: z.ZodString;
        identifier: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }>>>;
    switchWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        dataConfigurationId: z.ZodOptional<z.ZodNumber>;
        host: z.ZodString;
        protocol: z.ZodString;
        identifier: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }>>>;
    leverWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        dataConfigurationId: z.ZodOptional<z.ZodNumber>;
        host: z.ZodString;
        protocol: z.ZodString;
        identifier: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }, {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    projectId: number | null;
    configurationId: number;
    configurationProjectId: number | null;
    joystickWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
    switchWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
    leverWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
}, {
    id: number;
    projectId: number | null;
    configurationId: number;
    configurationProjectId: number | null;
    joystickWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
    switchWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
    leverWebsocketConfiguration?: {
        id: number;
        host: string;
        protocol: string;
        identifier: string;
        dataConfigurationId?: number | undefined;
    } | null | undefined;
}>;
export declare const SaveDataConfigurationSchema: z.ZodObject<{
    componentKey: z.ZodString;
    dataConfiguration: z.ZodObject<{
        id: z.ZodNumber;
        configurationId: z.ZodNumber;
        projectId: z.ZodNullable<z.ZodNumber>;
        configurationProjectId: z.ZodNullable<z.ZodNumber>;
        joystickWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
        switchWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
        leverWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    }, {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    dataConfiguration: {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    };
    componentKey: string;
}, {
    dataConfiguration: {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    };
    componentKey: string;
}>;
export declare const UpdateDataConfigurationSchema: z.ZodObject<{
    componentKey: z.ZodString;
    dataConfiguration: z.ZodObject<{
        id: z.ZodNumber;
        configurationId: z.ZodNumber;
        projectId: z.ZodNullable<z.ZodNumber>;
        configurationProjectId: z.ZodNullable<z.ZodNumber>;
        joystickWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
        switchWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
        leverWebsocketConfiguration: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodNumber;
            dataConfigurationId: z.ZodOptional<z.ZodNumber>;
            host: z.ZodString;
            protocol: z.ZodString;
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }, {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    }, {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    dataConfiguration: {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    };
    componentKey: string;
}, {
    dataConfiguration: {
        id: number;
        projectId: number | null;
        configurationId: number;
        configurationProjectId: number | null;
        joystickWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        switchWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
        leverWebsocketConfiguration?: {
            id: number;
            host: string;
            protocol: string;
            identifier: string;
            dataConfigurationId?: number | undefined;
        } | null | undefined;
    };
    componentKey: string;
}>;
export declare const DataConfigurationByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export type DataConfigurationSchema = z.infer<typeof dataConfigurationSchema>;
export type JoystickWebSocketConfigurationSchema = z.infer<typeof joystickWebSocketConfigurationSchema>;
export type SwitchWebsocketConfigurationSchema = z.infer<typeof switchWebsocketConfigurationSchema>;
export type LeverWebsocketConfigurationSchema = z.infer<typeof leverWebsocketConfigurationSchema>;
