import { z } from "zod";

export const GetByIdSchema = z.object({
    Id: z.number()
})