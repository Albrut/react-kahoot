import { Link } from "react-router-dom";
import "../css/register.css"

export function Register() {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h2 className="register-heading">Регистрация</h2>
                <form className="register-form">
                    <input type="text" placeholder="Имя" className="register-input-field" />
                    <input type="email" placeholder="Email" className="register-input-field" />
                    <input type="password" placeholder="Пароль" className="register-input-field" />
                    <button className="submit-button">Зарегистрироваться</button>
                </form>
                <p className="register-login-text">
                    Уже есть аккаунт? <Link to="/login" className="register-login-link">Войти</Link>
                </p>
            </div>
        </div>
    );
}
