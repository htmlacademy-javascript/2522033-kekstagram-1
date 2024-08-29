import { renderBigPicture } from './big-picture.js';

const template = document.querySelector('#picture');
const createElement = function (picture) {
  const cloneElement = template.content.querySelector('a').cloneNode(true);
  const pictureImg = cloneElement.querySelector('.picture__img');
  pictureImg.src = picture.url;
  // Устанавливает атрибут alt для элемента изображения. присвоить альтернативный текст для изображения
  pictureImg.alt = picture.description;
  const likes = cloneElement.querySelector('.picture__likes');
  likes.textContent = picture.likes;
  const comments = cloneElement.querySelector('.picture__comments');
  comments.textContent = picture.comments.length;
  return cloneElement;
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
