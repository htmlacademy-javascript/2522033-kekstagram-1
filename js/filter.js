import { renderPictures } from './picture.js';

// устраняем дребезг.
const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};
// Создаем дебаунсенную версию функции renderPictures
const debounceRenderPictures = debounce (renderPictures);


// Функция для получения случайных фотографий
function getRandomPhotos(photos, count = 10) {
  // Перемешиваем массив
  const shuffledPhotos = photos.slice().sort(() => 0.5 - Math.random());
  // Берем первые `count` элементов
  return shuffledPhotos.slice(0, count);
}

// Функция для сортировки фотографий по количеству комментариев
// Эта функция принимает массив photos и сортирует его в порядке убывания количества комментариев.
function sortByComments(photos) {
  // b.comments.length - a.comments.length: Если b имеет больше комментариев, чем a, эта функция возвращает положительное число, сортируя b выше.
  return photos.slice().sort((a, b) => b.comments.length - a.comments.length);
}

// Реализовать переключение по кнопкам,через обработчик событий
// Обработчики для изменения фильтров
// Обьявить функцию (с параметром photos)
const switchFilters = function (photos) {
  // Находим все кнопки с классом filter-button на странице.
  const filterButtons = document.querySelectorAll('.img-filters__button');
  // Проходим по каждой кнопке в массиве.
  filterButtons.forEach((button) => {
    // Добавляем обработчик события click к каждой кнопке.
    button.addEventListener('click', () => {
      // Удаляем класс active со всех кнопок
      filterButtons.forEach((b) => b.classList.remove('img-filters__button--active'));
      // Добавляем класс active к нажатой кнопке
      button.classList.add('img-filters__button--active');
      // Получаем тип фильтра из Id кнопки.
      // Извлечь тип фильтра из идентификатора кнопки.
      // Предполагается, что идентификатор кнопки имеет формат "filter-type",
      const filterType = button.id;
      // Обновляем список фотографий в зависимости от фильтра
      let filteredPhotos = photos; // Начинаем с исходного массива
      // Если выбран фильтр “Случайные”, вызывается функция getRandomPhotos.
      if (filterType === 'filter-random') {
        filteredPhotos = getRandomPhotos (photos);
        // Если выбран фильтр “Обсуждаемые”, вызывается функция sortByComments.
      } else if (filterType === 'filter-discussed') {
        filteredPhotos = sortByComments(photos);
      }
      // Вызвать функцию Renderpictures
      debounceRenderPictures(filteredPhotos);
    });
  });
};

export { switchFilters } ;
