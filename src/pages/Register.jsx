import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";

export function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                navigate("/login");
            } else {
                setError(data.Error || "Ошибка регистрации");
            }
        } catch (err) {
            setError("Ошибка соединения с сервером");
        }
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h2 className="register-heading">Регистрация</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Имя"
                        className="register-input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="register-input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button className="submit-button" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <p className="register-login-text">
                    Уже есть аккаунт?{" "}
                    <Link to="/login" className="register-login-link">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}
