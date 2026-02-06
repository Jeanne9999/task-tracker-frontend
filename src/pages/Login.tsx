import {useState} from "react";
import {login} from "../api/auth.ts";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username.trim(), password.trim());
            navigate("/tasks");
        } catch {
            setError("Invalid credentials");
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-blue-500">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md w-[350px] space-y-4"
                >

                    <h2 className="text-2xl font-bold text-center">
                        Task Tracker
                    </h2>

                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border p-2 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>

                    {error && (
                        <p className="text-red-500 text-center text-sm">
                            {error}
                        </p>
                    )}

                </form>

            </div>
            </>
            );
            };

            export default Login;