// Функція для виконання запиту до API з обробкою помилок
async function executeAPIRequest(endpoint, method, data, authorization) {
    // Об'єкт налаштувань для запиту
    let requestOptions = {
        method: method,
        headers: {
            'Authorization': authorization
        }
    };

    try {
        // Виконуємо запит і повертаємо результат
        const response = await fetch(endpoint, requestOptions);
        return await response.json();
    } catch (error) {
        console.error(`Помилка виконання запиту ${method} до API:`, error);
        throw error; // Передаємо помилку далі для подальшої обробки
    }
}

// Функція для отримання даних з API
async function getDataFromAPI(endpoint, authorization) {
    try {
        return await executeAPIRequest(endpoint, 'GET', null, authorization);
    } catch (error) {
        console.error('Помилка отримання даних з API:', error);
        throw error; // Передаємо помилку далі для подальшої обробки
    }
}

// Функція для видалення даних з API
async function deleteDataFromAPI(endpoint, authorization) {
    try {
        return await executeAPIRequest(endpoint, 'DELETE', null, authorization);
    } catch (error) {
        console.error('Помилка видалення даних з API:', error);
        throw error; // Передаємо помилку далі для подальшої обробки
    }
}

// Функція для створення даних в API
async function createDataInAPI(endpoint, data, authorization) {
    try {
        return await executeAPIRequest(endpoint, 'POST', data, authorization);
    } catch (error) {
        console.error('Помилка створення даних в API:', error);
        throw error; // Передаємо помилку далі для подальшої обробки
    }
}

// Функція для модифікації даних в API
async function modifyDataInAPI(endpoint, data, authorization) {
    try {
        return await executeAPIRequest(endpoint, 'PUT', data, authorization);
    } catch (error) {
        console.error('Помилка модифікації даних в API:', error);
        throw error; // Передаємо помилку далі для подальшої обробки
    }
}
