import { Link } from "react-router-dom";

export default function Game() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-white">
            <h1 className="text-4xl font-bold">Страница игры</h1>
            <p className="mt-4">Здесь будет логика игры!</p>
            <Link to="/" className="mt-6 px-6 py-2 bg-white text-green-600 rounded-lg">На главную</Link>
        </div>
    );
}
