import prisma from "../config/prisma.js";

export const getPortfolioSummary = async (userId) => {

    const aggregate = await prisma.investment.aggregate({

        where: {
            userId,
        },

        _sum: {
            investedAmount: true,
            currentValue: true,
        },

        _count: {
            id: true,
        },

    });

    const totalInvestment =
        aggregate._sum.investedAmount || 0;

    const currentValue =
        aggregate._sum.currentValue || 0;

    return {

        totalInvestment,

        currentValue,

        totalProfitLoss:
            currentValue - totalInvestment,

        totalInvestments:
            aggregate._count.id,

    };

};