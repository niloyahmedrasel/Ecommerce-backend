import express from "express";
import { CategoryController } from "../controller/category";
import validate from "../middleware/validate";
import { categorySchema } from "../validation/category";
const router = express.Router();

router.post("/",validate(categorySchema), new CategoryController().create);
router.get("/:_id",new CategoryController().get);
router.put("/:_id",validate(categorySchema),new CategoryController().update);
router.delete("/:_id",new CategoryController().delete);

export default router;
