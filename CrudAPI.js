// Функція для отримання даних з API
function getDataFromAPI(endpoint, params, authorization) {
    return fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': authorization
        }
    })
        .then(response => response.json())
        .catch(error => console.error('Помилка отримання даних з API:', error));
}

// Функція для видалення даних з API
function deleteDataFromAPI(endpoint, params, authorization) {
    return fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Authorization': authorization
        }
    })
        .catch(error => console.error('Помилка видалення даних з API:', error));
}

// Функція для створення даних в API
function createDataInAPI(endpoint, data, authorization) {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(data)
    })
        .catch(error => console.error('Помилка створення даних в API:', error));
}

// Функція для модифікації даних в API
function modifyDataInAPI(endpoint, data, authorization) {
    return fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(data)
    })
        .catch(error => console.error('Помилка модифікації даних в API:', error));
}
