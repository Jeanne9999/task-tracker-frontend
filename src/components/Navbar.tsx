import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="h-14 bg-slate-800 text-white flex items-center justify-between px-6">

            <h3 className="font-bold">Task Tracker</h3>

            <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>

        </nav>
    );
};

export default Navbar;
