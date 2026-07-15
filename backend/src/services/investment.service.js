import prisma from "../config/prisma.js";
import ApiError from "../utils/ApiError.js";

export const createInvestment = async (investmentData, userId) => {
    const investment = await prisma.investment.create({
        data: {
            investmentName: investmentData.investmentName,
            investmentType: investmentData.investmentType,
            investedAmount: investmentData.investedAmount,
            currentValue: investmentData.currentValue,
            purchaseDate: new Date(investmentData.purchaseDate),
            userId,
        },
    });

    return investment;
};

export const getAllInvestments = async (
    userId,
    page = 1,
    limit = 10,
    type,
    search
) => {
    page = Math.max(1, Number(page) || 1);
    limit = Math.min(50, Math.max(1, Number(limit) || 10));

    const skip = (page - 1) * limit;

    const where = {
        userId,
    };

    if (type) {
        where.investmentType = type;
    }

    if (search) {
        where.investmentName = {
            contains: search,
            mode: "insensitive",
        };
    }

    const [investments, total] = await Promise.all([
        prisma.investment.findMany({
            where,
            skip,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        }),

        prisma.investment.count({
            where,
        }),
    ]);

    return {
        investments,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};

export const getInvestmentById = async (id, userId) => {

    const investment = await prisma.investment.findFirst({
        where: {
            id,
            userId,
        },
    });

    if (!investment) {
        throw new ApiError(
            404,
            "Investment not found."
        );
    }

    return investment;
};


export const updateInvestment = async (
    id,
    investmentData,
    userId
) => {

    const investment = await prisma.investment.findFirst({
        where: {
            id,
            userId,
        },
    });

    if (!investment) {
        throw new ApiError(
            404,
            "Investment not found."
        );
    }

    const updatedInvestment = await prisma.investment.update({
        where: {
            id,
        },
        data: {
            investmentName: investmentData.investmentName,
            investmentType: investmentData.investmentType,
            investedAmount: investmentData.investedAmount,
            currentValue: investmentData.currentValue,
            purchaseDate: new Date(investmentData.purchaseDate),
        },
    });

    return updatedInvestment;
};

export const deleteInvestment = async (id, userId) => {

    const investment = await prisma.investment.findFirst({
        where: {
            id,
            userId,
        },
    });

    if (!investment) {
        throw new ApiError(
            404,
            "Investment not found."
        );
    }

    await prisma.investment.delete({
        where: {
            id,
        },
    });

    return null;
};