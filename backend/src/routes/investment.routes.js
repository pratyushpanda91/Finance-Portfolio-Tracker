import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { updateInvestmentSchema } from "../validations/investment.validation.js";

import {
    create,
    getAll,
    getById,
    update,
    remove,
} from "../controllers/investment.controller.js";

import { createInvestmentSchema } from "../validations/investment.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.post(
    "/",
    validate(createInvestmentSchema),
    create
);

router.get("/", getAll);
router.get("/:id", getById);
router.put(
    "/:id",
    validate(updateInvestmentSchema),
    update
);
router.delete(
    "/:id",
    remove
);

export default router;