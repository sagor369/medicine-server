import { z } from "zod";

export const AddressValidation =z.object({
    body: z.object({
        name: z.string(),
        price: z.string(),
        productId: z.string()
    })
})