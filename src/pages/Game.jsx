import { Link } from "react-router-dom";

export default function Game() {
    return (
        <div className="game-container">
            <h1 className="game-title">Страница игры</h1>
            <p className="game-text">Здесь будет логика игры!</p>
            <Link to="/" className="game-button">На главную</Link>
        </div>
    );
}