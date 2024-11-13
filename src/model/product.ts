import mongoose, { Schema } from "mongoose";
import { IProduct } from "./interface/product";

const productSchema: Schema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isAvailable:{
      type: Boolean,
      default: true
    },
    sku: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    image:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
