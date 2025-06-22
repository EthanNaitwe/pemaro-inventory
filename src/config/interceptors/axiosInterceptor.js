import axios from "axios";
import { logoutUser } from "../store/actions/settingsActions";
import { findBaseUrl } from "../helpers/configHelpers";

// Create an Axios instance
const api = axios.create({
    baseURL: findBaseUrl(import.meta.env.VITE_APP_NAME), // Replace with your API URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Function to attach store for dispatching actions
export const setupAxiosInterceptors = (store) => {
    // ✅ Request Interceptor: Attach Token
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token"); // Get token from localStorage

            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Attach token
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // ✅ Response Interceptor: Handle Invalid Token
    api.interceptors.response.use(
        (response) => response, // Return response if successful
        (error) => {
            if (error.response && error.response.data.message === 'Invalid token') {
                console.warn("⚠️ Token expired or invalid. Logging out...");
                localStorage.removeItem('token');
                store.dispatch(logoutUser());
            }

            return Promise.reject(error);
        }
    );
}

export default api;
