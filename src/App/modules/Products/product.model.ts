import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  metaKey: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  isDeleted:{
    type: Boolean, 
    default: false
  },
  stockStatus: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    required: true,
  },
  categories: {
    primaryCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    secondaryCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tertiaryCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
},
{
    timestamps:true
});

export const Product = model<TProduct>("products", productSchema )
