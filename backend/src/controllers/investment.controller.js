import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";

import { createInvestment } from "../services/investment.service.js";

export const create = asyncHandler(async (req, res) => {

    const investment = await createInvestment(
        req.body,
        req.user.id
    );

    return apiResponse(
        res,
        201,
        "Investment created successfully.",
        investment
    );

});