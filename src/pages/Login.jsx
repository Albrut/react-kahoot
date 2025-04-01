import { Link } from "react-router-dom";
import "../css/login.css"

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Вход</h2>
                <form className="login-form">
                    <input type="email" placeholder="Email" className="login-input" />
                    <input type="password" placeholder="Пароль" className="login-input" />
                    <button className="login-button">Войти</button>
                </form>
                <p className="login-text">
                    Нет аккаунта? <Link to="/register" className="login-register-link">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
}