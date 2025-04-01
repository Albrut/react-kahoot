import { Link } from "react-router-dom";
import "../css/homePage.css";
import "../css/main.css"

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1 className="home-title">Добро пожаловать!</h1>
                <p className="home-text">Выберите действие:</p>
            </div>
            <div className="home-buttons">
                <Link to="/login" className="home-button-link">Войти</Link>
                <Link to="/register" className="home-button-link">Регистрация</Link>
                <Link to="/game" className="home-button-link">Играть</Link>
            </div>
        </div>
    );
}