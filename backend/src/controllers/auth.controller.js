import { registerUser, loginUser } from "../services/auth.service.js";
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

export const login = asyncHandler(async (req, res) => {
    const result = await loginUser(req.body);

    return apiResponse(
        res,
        200,
        "Login successful.",
        result
    );
});