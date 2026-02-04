import axios from "./axios";

export const login = async (username: string, password: string) => {
    const res = await axios.post("/api/auth/authenticate", {
        username,
        password,
    });

    localStorage.setItem("token", res.data.token);

    return res.data.token;
};

export const logout = () => {
    localStorage.removeItem("token");
};