import { renderBigPicture } from './big-picture.js';

const template = document.querySelector('#picture');
const createElement = function (picture) {
  const element = template.content.querySelector('a').cloneNode(true);
  const img = element.querySelector('.picture__img');
  img.src = picture.url;
  // Устанавливает атрибут alt для элемента изображения. присвоить альтернативный текст для изображения
  img.alt = picture.description;
  const likes = element.querySelector('.picture__likes');
  likes.textContent = picture.likes;
  const comments = element.querySelector('.picture__comments');
  comments.textContent = picture.comments.length;
  return element;
};

const renderPictures = function (pictures) {
  //  Получаем ссылку на контейнер для изображений на странице
  const picturesContainer = document.querySelector('.pictures');
  //  Создаем фрагмент документа для оптимизации DOM-манипуляций
  const fragment = document.createDocumentFragment();
  //  Проходим по каждому изображению в массиве pictures
  for (let i = 0; pictures.length > i; i++) {
    //  Получаем текущее изображение из массива
    const picture = pictures[i];
    //  Создаем элемент изображения с помощью функции createElement
    const pictureElement = createElement(picture);
    //  Добавляем созданный элемент в фрагмент документа
    fragment.appendChild(pictureElement);
    //  Добавляем обработчик события 'click' к элементу изображения
    pictureElement.addEventListener('click', () => renderBigPicture(picture));
  }
  //  Удаляем все существующие элементы изображений из контейнера
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  //  Добавляем фрагмент документа (содержащий все новые элементы изображений) в контейнер
  picturesContainer.appendChild(fragment);
};

export { renderPictures };
