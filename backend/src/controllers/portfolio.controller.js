import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";

import { getPortfolioSummary } from "../services/portfolio.service.js";

export const getSummary = asyncHandler(async (req, res) => {

    const summary = await getPortfolioSummary(
        req.user.id
    );

    return apiResponse(
        res,
        200,
        "Portfolio summary fetched successfully.",
        summary
    );

});