import Login from "./pages/Login.tsx";
import Tasks from "./pages/Tasks.tsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router';
import PrivateRoute from "./routes/PrivateRoute";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                    </Route>
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
