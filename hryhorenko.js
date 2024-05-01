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


const manipulateDataInApi = (endpoint, params, data, action, authorization) => {
  let requestOptions = {
    headers: {
      Authorization: authorization,
    },
  };

  if (action === "GET") {
    return fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.error("Помилка отримання даних з API:", error));
  } else if (action === "DELETE") {
    /* Логіка видалення даних з API за допомогою переданих параметрів */
    return fetch(endpoint, { ...requestOptions, method: "DELETE" }).catch(
      (error) => console.error("Помилка видалення даних з API:", error)
    );
  } else if (action === "POST") {
    /* Логіка створення даних в API за допомогою переданих параметрів */
    requestOptions.method = "POST";
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(data);
    return fetch(endpoint, requestOptions).catch((error) =>
      console.error("Помилка створення даних в API:", error)
    );
  } else if (action === "PUT") {
    /* Логіка модифікації даних в API за допомогою переданих параметрів */
    requestOptions.method = "PUT";
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(data);
    return fetch(endpoint, requestOptions).catch((error) =>
      console.error("Помилка модифікації даних в API:", error)
    );
  } else {
    console.error("Невідома операція");
  }
}
