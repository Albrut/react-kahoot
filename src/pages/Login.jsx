import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/login", { username: email, password });
            localStorage.setItem("token", response.data.access_token);
            navigate("/dashboard");
        } catch (err) {
            setError("Ошибка: неверные учетные данные");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Вход</h2>
                {error && <p className="login-error">{error}</p>}
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Войти</button>
                </form>
                <p className="login-text">
                    Нет аккаунта? <Link to="/register" className="login-register-link">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
}
