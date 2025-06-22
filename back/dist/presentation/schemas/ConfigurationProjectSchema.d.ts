import { z } from "zod";
export declare const SaveConfigurationProjectSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    configurationId: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    projectId: number;
    configurationId: number;
}, {
    description: string;
    projectId: number;
    configurationId: number;
}>;
export declare const UpdateConfigurationProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    projectId: z.ZodNumber;
    configurationId: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    description: string;
    projectId: number;
    configurationId: number;
}, {
    id: number;
    description: string;
    projectId: number;
    configurationId: number;
}>;
export declare const DeleteConfigurationProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    projectId: z.ZodNumber;
    configurationId: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    description: string;
    projectId: number;
    configurationId: number;
}, {
    id: number;
    description: string;
    projectId: number;
    configurationId: number;
}>;
export declare const DeleteConfigurationProjectByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const GetConfigurationProjectByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
