import axios from "./axios";

export const login = async (username: string, password: string) => {
    const res = await axios.post("/api/auth/authenticate", {
        username,
        password,
    });
    return res.data.token;
};