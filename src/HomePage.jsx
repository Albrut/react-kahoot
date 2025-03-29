import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
            <h1 className="text-4xl font-bold">Добро пожаловать!</h1>
            <p className="mt-4">Выберите действие:</p>
            <div className="mt-6 space-x-4">
                <Link to="/login" className="px-6 py-2 bg-white text-blue-600 rounded-lg">Войти</Link>
                <Link to="/register" className="px-6 py-2 bg-white text-blue-600 rounded-lg">Регистрация</Link>
                <Link to="/game" className="px-6 py-2 bg-white text-blue-600 rounded-lg">Играть</Link>
            </div>
        </div>
    );
}