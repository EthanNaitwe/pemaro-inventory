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

export const getProductsApi = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const createProductApi = async (prodData) => {
    const response = await api.post("/products", prodData);
    return response.data;
};
