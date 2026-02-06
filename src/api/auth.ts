import api from "../api/axios";

export const login = async (username: string, password: string) => {
    const res = await api.post("/api/auth/authenticate", {
        username,
        password,
    });

    console.log("LOGIN RESPONSE:", res.data);

    localStorage.setItem("token", res.data.token);

    return res.data.token;
};

export const logout = () => {
    localStorage.removeItem("token");
};