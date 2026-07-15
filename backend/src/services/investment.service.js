import prisma from "../config/prisma.js";

export const createInvestment = async (investmentData, userId) => {
    const investment = await prisma.investment.create({
        data: {
            investmentName: investmentData.investmentName,
            investmentType: investmentData.investmentType,
            investedAmount: investmentData.investedAmount,
            currentValue: investmentData.currentValue,
            purchaseDate: new Date(investmentData.purchaseDate),
            userId
        }
    });

    return investment;
};