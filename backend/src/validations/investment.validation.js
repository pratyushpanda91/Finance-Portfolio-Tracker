import { z } from "zod";

export const createInvestmentSchema = z.object({
    investmentName: z
        .string()
        .trim()
        .min(2, "Investment name must be at least 2 characters."),

    investmentType: z.enum([
        "STOCK",
        "MUTUAL_FUND",
        "ETF",
        "GOLD",
        "CRYPTO",
        "BOND",
    ]),

    investedAmount: z
        .number()
        .positive("Invested amount must be greater than 0."),

    currentValue: z
        .number()
        .positive("Current value must be greater than 0."),

    purchaseDate: z
        .string()
        .datetime("Invalid purchase date."),
});

export const updateInvestmentSchema = createInvestmentSchema;