import {useNavigate} from "react-router-dom";
import {logout} from "../api/auth";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav style = {styles.nav}>
            <h3>Task Tracker</h3>

            <button onClick={handleLogout} style={styles.btn}>
                Logout
            </button>
        </nav>
    );
};

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "1b293b",
        color: "white",
    },
    btn: {
        background: "black",
        border: "none",
        color: "white",
        padding: "6px 12px",
        cursor: "pointer",
        borderRadius: "4px",
    },
}

    export default Navbar;