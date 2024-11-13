import express from "express";
import { ProductController } from "../controller/product";
import validate from "../middleware/validate";
import { productSchema } from "../validation/product";
import { valid } from "joi";
import parseFilters from "../middleware/parsedFilter";
const router = express.Router();

router.post("/:_id",validate(productSchema), new ProductController().create);
router.get('/filter', parseFilters, new ProductController().filterProducts);
router.get("/all", new ProductController().getAll);
router.get("/:_id", new ProductController().get);
router.put("/:_id", validate(productSchema), new ProductController().update);
router.delete("/:_id", new ProductController().delete);

export default router;
