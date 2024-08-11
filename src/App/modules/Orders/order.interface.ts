import { Types } from "mongoose";
import { orderStatus } from "./order.const";

export type OrderItem= {
    productId: Types.ObjectId;
    productName: string;
    quantity: number;
    price: number;
  }

export type TOrders = {
    userId: Types.ObjectId;
    orderDate: Date;
    status: keyof typeof orderStatus;
    items: OrderItem[];
    totalAmount: number;
    shippingAddress: Types.ObjectId;
    paymentMethod?: string;
    isPaid: boolean;
    isDeleted: boolean
}

