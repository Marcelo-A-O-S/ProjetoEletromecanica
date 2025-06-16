import { z } from "zod";

export const SaveProjectSchema = z.object({
    name: z.string(),
    description: z.string()
})
export const UpdateProjectSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string()
})
export const DeleteProjectSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string() 
})
export const DeleteProjectByIdSchema = z.object({
    id: z.number(),
})
export const ProjectByIdSchema = z.object({
    id: z.number(),
})