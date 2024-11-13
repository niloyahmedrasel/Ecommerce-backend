import mongoose, { Schema } from "mongoose";
import { IOrder } from "./interface/order";

const orderSchema: Schema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    products: [{
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    }],
    total_amount: {
      type: Number,
      required: true,
    },
    customer_name: {
      type: String,
      required: true,
    },
    customer_address: {
      type: String,
      required: true,
    },
    customer_mobile: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
