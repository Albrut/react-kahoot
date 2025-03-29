
import { Link } from "react-router-dom";

export function Register() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-center text-2xl font-bold">Регистрация</h2>
                <form className="space-y-4 mt-4">
                    <input type="text" placeholder="Имя" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Пароль" className="input" />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Зарегистрироваться</button>
                </form>
                <p className="text-center mt-4">
                    Уже есть аккаунт? <Link to="/login" className="text-blue-500 hover:underline">Войти</Link>
                </p>
            </div>
        </div>
    );
}