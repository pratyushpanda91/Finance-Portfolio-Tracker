import api from "./api";

export const getInvestments = async ({
    page = 1,
    limit = 5,
    search = "",
} = {}) => {
    const response = await api.get("/investments", {
        params: {
            page,
            limit,
            search,
        },
    });

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