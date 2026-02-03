import Login from "./pages/Login.tsx";
import Tasks from "./pages/Tasks.tsx";
import {ReactNode} from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
