import { z } from "zod";
export declare const SaveProjectSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
}, {
    name: string;
    description: string;
}>;
export declare const UpdateProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    description: string;
}, {
    name: string;
    id: number;
    description: string;
}>;
export declare const DeleteProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    description: string;
}, {
    name: string;
    id: number;
    description: string;
}>;
export declare const DeleteProjectByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const ProjectByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
