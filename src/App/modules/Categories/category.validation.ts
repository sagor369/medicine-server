import { z } from "zod";

export const categoryValidation = z.object({
    body: z.object({
        name: z.string(),
        slug: z.string(),
        thumbnail: z.string()
    })
})