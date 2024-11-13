import mongoose, { Schema } from "mongoose";
import { IBusiness } from "./interface/business";

const businessSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    logo:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Business = mongoose.model<IBusiness>("Business", businessSchema);
export default Business;
