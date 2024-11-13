import express from "express";
import { BusinessController } from "../controller/business";
import validate from "../middleware/validate";
import { businessSchema } from "../validation/business";
const router = express.Router();

router.post("/", validate(businessSchema), new BusinessController().create);
router.get("/:_id", new BusinessController().get);
router.put("/:_id", validate(businessSchema), new BusinessController().update);
router.delete("/:_id", new BusinessController().delete);

export default router;
