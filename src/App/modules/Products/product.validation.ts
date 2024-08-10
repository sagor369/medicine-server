import { z } from "zod";

export const productValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    slug: z.string().min(1, { message: "Slug is required" }),
    photos: z.array(z.string().url(), {
      message: "Photos must be an array of valid URLs",
    }),
    description: z.string().min(1, { message: "Description is required" }),
    metaKey: z.string().min(1, { message: "Meta key is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    isDeleted: z.boolean(),
    discount: z
      .number()
      .nonnegative({ message: "Discount must be a non-negative number" })
      .optional(),
    stockStatus: z.boolean(),
    categories: z.object({
        primaryCategoryId: z.string().optional(),
        secondaryCategoryId: z.string().optional(),
        tertiaryCategoryId: z.string().optional(),
      })
      .optional(),
  }),
});
