import { z } from "zod";
export declare const FindByEmailSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const SaveUserSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    role: string;
}, {
    email: string;
    password: string;
    name: string;
    role: string;
}>;
export declare const UpdateUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    role: string;
    id: number;
}, {
    email: string;
    password: string;
    name: string;
    role: string;
    id: number;
}>;
export declare const DeleteUserSchema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    role: string;
    id: number;
}, {
    email: string;
    password: string;
    name: string;
    role: string;
    id: number;
}>;
export declare const DeleteByIdUserSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const FindByRolesUserSchema: z.ZodObject<{
    role: z.ZodString;
}, "strip", z.ZodTypeAny, {
    role: string;
}, {
    role: string;
}>;
