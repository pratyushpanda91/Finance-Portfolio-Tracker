import { registerUser } from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";

export const register = asyncHandler(async (req, res) => {
    const user = await registerUser(req.body);

    return apiResponse(
        res,
        201,
        "User registered successfully.",
        user
    );
});