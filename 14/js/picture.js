import { renderBigPicture } from './big-picture.js';

const template = document.querySelector('#picture');
const createElement = function (picture) {
  const element = template.content.querySelector('a').cloneNode(true);
  const img = element.querySelector('.picture__img');
  img.src = picture.url;
  const likes = element.querySelector('.picture__likes');
  likes.textContent = picture.likes;
  const comments = element.querySelector('.picture__comments');
  comments.textContent = picture.comments.length;
  return element;
};

const renderPictures = function (pictures) {
  const picturesContainer = document.querySelector('.pictures');
  for (let i = 0; pictures.length > i; i++) {
    const picture = pictures[i];
    const pictureElement = createElement(picture);
    picturesContainer.appendChild(pictureElement);
    pictureElement.addEventListener('click', (evt) => {
      renderBigPicture(picture);
    });
  }
};
export { renderPictures };
