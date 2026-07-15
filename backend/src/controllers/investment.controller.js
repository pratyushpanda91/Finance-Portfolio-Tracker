import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";

import {
    createInvestment,
    getAllInvestments,
    getInvestmentById,
    updateInvestment,
    deleteInvestment,
} from "../services/investment.service.js";

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

export const getAll = asyncHandler(async (req, res) => {

    const { page, limit, type, search } = req.query;

    const result = await getAllInvestments(
        req.user.id,
        page,
        limit,
        type,
        search
    );

    return apiResponse(
        res,
        200,
        "Investments fetched successfully.",
        result
    );
});

export const getById = asyncHandler(async (req, res) => {

    const investment = await getInvestmentById(
        req.params.id,
        req.user.id
    );

    return apiResponse(
        res,
        200,
        "Investment fetched successfully.",
        investment
    );
});

export const update = asyncHandler(async (req, res) => {

    const investment = await updateInvestment(
        req.params.id,
        req.body,
        req.user.id
    );

    return apiResponse(
        res,
        200,
        "Investment updated successfully.",
        investment
    );

});

export const remove = asyncHandler(async (req, res) => {

    await deleteInvestment(
        req.params.id,
        req.user.id
    );

    return apiResponse(
        res,
        200,
        "Investment deleted successfully.",
        null
    );

});