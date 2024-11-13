import express from "express";
import { OrderController } from "../controller/order";
import validate from "../middleware/validate";
import { orderSchema } from "../validation/order";
import parseFilters from "../middleware/parsedFilter";
const router = express.Router();


router.get("/filter", parseFilters, new OrderController().filterOrder);
router.post("/:_id", validate(orderSchema), new OrderController().create);
router.get("/:_id", new OrderController().get);
router.put("/:_id", validate(orderSchema), new OrderController().update);
router.delete("/:_id", new OrderController().delete);



export default router;
