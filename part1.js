// Функція для отримання даних з API
const getDataFromApi = (endpoint, params, authorization) => {
  return fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: authorization,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error("Помилка отримання даних з API:", error));
};


// Функція для видалення даних з API
const deleteDataFromApi = (endpoint, params, authorization) => {
  return fetch(endpoint, {
    method: "DELETE",
    headers: {
      Authorization: authorization,
    },
  }).catch((error) => console.error("Помилка видалення даних з API:", error));
};


// Функція для створення даних в API
const createDataInApi = (endpoint, data, authorization) => {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error("Помилка створення даних в API:", error));
};


// Функція для модифікації даних в API
const modifyDataInApi = (endpoint, data, authorization) => {
  return fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error("Помилка модифікації даних в API:", error));
};