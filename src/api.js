import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export async function registerAdmin(username, password) {
    try {
        const response = await axios.post(`${API_BASE}/register`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Ошибка регистрации:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function loginAdmin(username, password) {
    try {
        const response = await axios.post(`${API_BASE}/login`, { username, password });
        return response.data; // { access_token: '...' }
    } catch (error) {
        console.error('Ошибка логина:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function createTest(token) {
    try {
        const response = await axios.post(
            `${API_BASE}/tests`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        console.error('Ошибка создания теста:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function joinGame(username) {
    try {
        const response = await axios.post(`${API_BASE}/games/join`, { username });
        return response.data;
    } catch (error) {
        console.error('Ошибка присоединения к игре:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function submitAnswer(answerId, playerId) {
    try {
        const response = await axios.post(`${API_BASE}/games/answer`, {
            answer_id: answerId,
            player_id: playerId,
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка отправки ответа:', error.response ? error.response.data : error.message);
        throw error;
    }
}
