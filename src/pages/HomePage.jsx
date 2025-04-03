import { Link } from "react-router-dom";
import "../css/homePage.css";

export default function InfoPage() {
    return (
        <div className="info-container">
            <header className="info-header">
                <h1 className="info-title">GameMaster: Твоя игра, твои правила!</h1>
                <p className="info-subtitle">Создавай, настраивай и делись игрой с друзьями</p>
            </header>
            <section className="info-content">
                <div className="info-section">
                    <h2>Что такое GameMaster?</h2>
                    <p>
                        GameMaster — это платформа для создания интерактивных игр, где каждый может стать ведущим.
                        Создавайте свои вопросы, настраивайте правила и приглашайте друзей присоединиться к увлекательной сессии!
                    </p>
                </div>
                <div className="info-section">
                    <h2>Как это работает?</h2>
                    <p>
                        Ведущий создает игру, добавляя собственные вопросы и варианты ответов. После настройки игры, игроки могут
                        подключаться к сессии по специальной ссылке или коду и отвечать на вопросы в удобном для них режиме.
                    </p>
                </div>
                <div className="info-section">
                    <h2>Основные возможности</h2>
                    <ul>
                        <li>Простой и интуитивно понятный интерфейс для создания вопросов</li>
                        <li>Настройка времени на ответ и сложность вопросов</li>
                        <li>Возможность делиться игрой с друзьями через уникальные ссылки</li>
                    </ul>
                </div>
            </section>
            <footer className="info-footer">
                <Link to="/register" className="info-button">Создать игру</Link>
            </footer>
        </div>
    );
}
