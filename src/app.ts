import express from "express";
import { dbConnect } from "./setup/db";
import businessRouter from "./routes/business";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
const app = express();
app.use(express.json());
dbConnect();

app.use("/api/business", businessRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

export default app;
