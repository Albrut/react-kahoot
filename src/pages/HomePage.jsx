import { Link } from "react-router-dom";
import "../css/homePage.css";
import "../css/main.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1 className="home-title">Добро пожаловать в GameMaster!</h1>
                <p className="home-description">
                    GameMaster — это интерактивная игра, где ваши знания и реакция решают всё!
                    Сразитесь с друзьями, пройдите уникальные испытания и станьте чемпионом!
                </p>
                <p className="home-text">
                        Готовы начать приключение?
                </p>
            </div>
            <div className="home-buttons">
                <Link to="/login" className="home-button-link">Войти</Link>
                <Link to="/register" className="home-button-link">Регистрация</Link>
            </div>
        </div>
    );
}
