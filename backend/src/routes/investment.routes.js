import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import { create } from "../controllers/investment.controller.js";

import { createInvestmentSchema } from "../validations/investment.validation.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    validate(createInvestmentSchema),
    create
);

export default router;