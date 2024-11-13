import mongoose, { Schema } from "mongoose";
import { ICategory } from "./interface/category";

const categorySchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
