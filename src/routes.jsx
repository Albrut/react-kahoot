import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import Game from "./pages/Game.jsx";
import {Register} from "./pages/Register.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}></Route>
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}
