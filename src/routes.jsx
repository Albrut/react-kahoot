import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage.jsx";
import Login from "./Login.jsx";
import Game from "./Game.jsx";
import {Register} from "./Register.jsx";

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
