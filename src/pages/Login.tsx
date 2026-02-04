import {useState} from "react";
import {login} from "../api/auth.ts";
import { useNavigate } from "react-router";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await login(username, password);
            localStorage.setItem("token", token);
            navigate("/tasks");
        } catch {
            setError("Invalid credentials");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                {error && <p>{error}</p>}
            </form>
        </>
    )
}

export default Login;