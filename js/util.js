export function getRandomIntInclusive(min, max) {
  //  Округляем min вверх и max вниз, чтобы включить пределы
  min = Math.ceil(min);
  max = Math.floor(max);
  //  Генерируем случайное число от 0 (включительно) до (max - min + 1) (не включая)
  //  Это дает нам диапазон от 0 до (max - min) включительно.
  //  Добавляем min к результату, чтобы получить случайное число в нужном диапазоне.
  //  Округляем результат вниз, чтобы получить целое число.
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Константа, определяющая время показа алерта (в миллисекундах)
const ALERT_SHOW_TIME = 5000;

// Функция для показа алерта
const showAlert = (message) => {
  //  Создаем элемент div для алерта
  const alert = document.createElement('div');
  //  Устанавливаем стили для алерта
  alert.style.position = 'absolute';
  //  Устанавливаем высокий z-index, чтобы алерт был поверх других элементов
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  //  Устанавливаем текст алерта
  alert.textContent = message;
  //  Добавляем алерт в тело документа
  document.body.append(alert);
  //  Используем setTimeout для удаления алерта через заданное время
  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert };
