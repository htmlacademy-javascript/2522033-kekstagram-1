// 1. Отправка данных с помощью AJAX
// Определяем адреса (маршруты) для API-запросов
// Адрес для получения данных
// Адрес для отправки данных
// Определяем типы HTTP-методов (GET, POST)
// Метод GET используется для получения данных
// Метод POST используется для отправки данных
// Тексты сообщений об ошибках для разных типов запросов
// Текст ошибки при отправке данных
// Основная функция для отправки запросов к API (API-интерфейсу)
// Формируем полный адрес запроса (URL)
// Отправляем запрос к API с помощью fetch
// Обрабатываем ответ сервера, если он успешный
// Проверяем, был ли запрос успешным (код ответа 200-299)
// Если запрос не успешный, генерируем ошибку
// Преобразуем ответ сервера в JSON-формат
// Обрабатываем ошибку, если она возникла
// Генерируем новую ошибку с текстом ошибки
// Функция для получения данных с сервера
// Функция для отправки данных на сервер
// Экспортируем функции для использования в других частях кода

// Базовый URL API
const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
// Определение маршрутов API
const Route = {
  GET_DATA: '/data', // Маршрут для получения данных
  SEND_DATA: '/', // Маршрут для отправки данных
};
// Определение HTTP-методов
const Method = {
  GET: 'GET', // Метод GET
  POST: 'POST', // Метод POST
};
// Тексты ошибок для различных операций
const ErrorText = {
  // Текст ошибки при получении данных
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  // Текст ошибки при отправке данных
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз',
};

// Функция для выполнения запросов к API
const load = (route, errorText, method = Method.GET, body = null) =>
  // Используем fetch для отправки запроса
  fetch(`${BASE_URL}${route}`, { method, body })
    // Обрабатываем успешный ответ
    .then((response) => {
      // Проверяем, был ли ответ успешным (статус 200-299)
      if (!response.ok) {
        // Если ответ не успешный, генерируем ошибку
        throw new Error();
      }
      // Парсим ответ как JSON
      return response.json();
    })
    // Обрабатываем ошибки
    .catch(() => {
      // Генерируем ошибку с соответствующим текстом
      throw new Error(errorText);
    });

// Функция для получения данных
const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

// Функция для отправки данных
const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
