import api from '../interceptors/axiosInterceptor';

export const createUserApi = async (userData) => {
    const response = await api.post("/users/register", userData);
    return response.data;
};

export const loginUserApi = async (userData) => {
    const response = await api.post("/users/login", userData);
    return response.data;
};

export const getProfileApi = async () => {
    const response = await api.get("/users/profile");
    return response.data;
};
export const getAllUsersApi = async () => {
    const response = await api.get("/users");
    return response.data;
};

export const getProductsApi = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const createProductApi = async (prodData) => {
    const response = await api.post("/products", prodData);
    return response.data;
};
export const addCategoryApi = async (productId, data) => {
    const response = await api.post(`/products/${productId}/variants`, data);
    return response.data;
};

export const getSalesApi = async () => {
    const response = await api.get("/sales");
    return response.data;
};

export const addNewSaleApi = async (productId, data) => {
    const response = await api.post(`/sales/${productId}/product`, data);
    return response.data;
};

export const getExpensessApi = async () => {
    const response = await api.get("/expenses");
    return response.data;
};

export const addExpensessApi = async (data) => {
    const response = await api.post("/expenses", data);
    return response.data;
};
