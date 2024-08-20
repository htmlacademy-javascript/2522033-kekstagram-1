import { renderPictures } from './picture.js';
import './form.js';
import './zoom.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import './filter.js';
import { switchFilters } from './filter.js';

// ошибка
try {
  //  Получаем данные с помощью getData()
  const photos = await getData();
  //  Находим элемент с классом 'img-filters'
  const filterElement = document.querySelector('.img-filters');
  //  Удаляем класс 'img-filters--inactive', делая фильтры видимыми
  filterElement.classList.remove('img-filters--inactive');
  //  Инициализируем фильтры с помощью switchFilters()
  switchFilters(photos);
  //  Отображаем изображения с помощью renderPictures()
  renderPictures(photos);
} catch (err) {
  //  В случае ошибки выводим сообщение с помощью showAlert()
  showAlert(err.message);
}
