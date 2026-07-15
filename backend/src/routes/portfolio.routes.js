import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import { getSummary } from "../controllers/portfolio.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
    "/summary",
    getSummary
);

export default router;