import { z } from "zod";
export declare const SaveConfigurationSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    componentKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    componentKey: string;
}, {
    name: string;
    description: string;
    componentKey: string;
}>;
export declare const UpdateConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    componentKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    description: string;
    componentKey: string;
}, {
    name: string;
    id: number;
    description: string;
    componentKey: string;
}>;
export declare const DeleteConfigurationSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    componentKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    description: string;
    componentKey: string;
}, {
    name: string;
    id: number;
    description: string;
    componentKey: string;
}>;
export declare const DeleteConfigurationByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const ConfigurationByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
