import { Types } from "mongoose";
import { z } from "zod";
import { orderStatus } from "./order.const";
// Zod schema for validating MongoDB ObjectId
const ObjectIdSchema = z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  });

const OrderItemSchema = z.object({
    productId: ObjectIdSchema,
    productName: z.string().min(1, "Product name is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    price: z.number().min(0, "Price must be a positive number"),
  });

export const OrdersValidation = z.object({
    body: z.object({
        userId: ObjectIdSchema,
        orderDate: z.date(),
        status: z.enum(Object.keys(orderStatus) as [string, ...string[]]),
        items: z.array(OrderItemSchema).min(1, "At least one item is required"),
        totalAmount: z.number().min(0, "Total amount must be a positive number"),
        shippingAddress: ObjectIdSchema,
        paymentMethod: z.string().optional(),
        isPaid: z.boolean().default(false),
    })
})