import api from "./api";

export const getInvestments = async (params = {}) => {
    const response = await api.get("/investments", { params });
    return response.data;
};

export const createInvestment = async (data) => {
    const response = await api.post("/investments", data);
    return response.data;
};

export const updateInvestment = async (id, data) => {
    const response = await api.put(`/investments/${id}`, data);
    return response.data;
};

export const deleteInvestment = async (id) => {
    const response = await api.delete(`/investments/${id}`);
    return response.data;
};