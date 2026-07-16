import api from "./api";

export const getPortfolioSummary = async () => {
    const response = await api.get("/portfolio/summary");
    return response.data;
};