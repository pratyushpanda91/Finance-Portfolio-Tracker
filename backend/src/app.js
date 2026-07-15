import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import investmentRoutes from "./routes/investment.routes.js";
import portfolioRoutes from "./routes/portfolio.routes.js";

import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Finance Portfolio Tracker API is running.",
    });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/investments", investmentRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

app.use(errorHandler);

export default app;