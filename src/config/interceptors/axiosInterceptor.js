import axios from "axios";
import { logoutUser } from "../store/actions/settingsActions";

// Create an Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Replace with your API URL
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

    // // ✅ Response Interceptor
    // api.interceptors.response.use(
    //     (response) => {
    //         console.log("✅ Response Received:", response);
    //         return response;
    //     },
    //     (error) => {
    //         console.error("❌ Response Error:", error);

    //         if (error.response) {
    //             if (error.response.status === 401) {
    //                 console.warn("⚠️ Unauthorized! Redirecting to login...");
    //                 // window.location.href = "/login"; // Redirect if unauthorized
    //             }
    //             if (error.response.status === 500) {
    //                 console.error("🔥 Server Error! Please try again later.");
    //             }
    //         }

    //         return Promise.reject(error);
    //     }
    // );


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
