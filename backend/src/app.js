import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

import errorHandler from "./middleware/error.middleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Finance Portfolio Tracker API is running."
    });
});

// API Routes
app.use("/api/v1/auth", authRoutes);

// Global Error Handler (Always Last)
app.use(errorHandler);

export default app;