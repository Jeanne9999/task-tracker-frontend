import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        const isAuth =
            config.url?.includes("/api/auth/authenticate");

        if (token && !isAuth) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
