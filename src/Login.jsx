import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-center text-2xl font-bold">Вход</h2>
                <form className="space-y-4 mt-4">
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Пароль" className="input" />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Войти</button>
                </form>
                <p className="text-center mt-4">
                    Нет аккаунта? <Link to="/register" className="text-blue-500 hover:underline">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
}
