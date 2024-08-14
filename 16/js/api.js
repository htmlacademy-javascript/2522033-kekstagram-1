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

const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные.Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму.Попробуйте еще раз',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
