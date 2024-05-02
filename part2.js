// Функція для маніпулювання даними в API
const manipulateDataInApi = (endpoint, params, data, action, authorization) => {
    let requestOptions = {
      headers: {
        'Authorization': authorization,
      },
    };
  
    // В залежності від дії, виконуємо відповідну логіку
    switch (action) {
        case 'GET':
            return fetchData(endpoint, requestOptions);
        case 'DELETE':
            return deleteData(endpoint, requestOptions);
        case 'POST':
            return createData(endpoint, data, requestOptions);
        case 'PUT':
            return updateData(endpoint, data, requestOptions);
        default:
            console.error('Невідома операція');
            break;
    }
}

// Функція для виконання GET запиту
const fetchData = (endpoint, requestOptions) => {
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        .catch(error => console.error('Помилка отримання даних з API:', error));
}

// Функція для виконання DELETE запиту
const deleteData = (endpoint, requestOptions) => {
    requestOptions.method = 'DELETE';
    return fetch(endpoint, requestOptions)
        .catch(error => console.error('Помилка видалення даних з API:', error));
}

// Функція для виконання POST запиту
const createData = (endpoint, data, requestOptions) => {
    requestOptions.method = 'POST';
    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(data);
    return fetch(endpoint, requestOptions)
        .catch(error => console.error('Помилка створення даних в API:', error));
}

// Функція для виконання PUT запиту
const updateData = (endpoint, data, requestOptions) => {
    requestOptions.method = 'PUT';
    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(data);
    return fetch(endpoint, requestOptions)
        .catch(error => console.error('Помилка модифікації даних в API:', error));
}