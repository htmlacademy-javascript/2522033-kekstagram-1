import { getRandomIntInclusive } from './util.js';

// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  // Проверяем, меньше ли длина строки указанной максимальной длины
  if (str.length <= maxLength) {
    return true; // Если да, возвращаем true
  } else {
    return false; // Если нет, возвращаем false
  }
}
function createObject(name, date, size) {
  const photoObject = {
    id: 2,
    url: `photos/${ getRandomIntInclusive(1, 25) }.jpg`,
    description: 'Просто фото',
    likes: getRandomIntInclusive(15, 200),
    comments: [
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
      {
        id: 13,
        avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
        message: 'В целом всё неплохо. Но не всё хорошо.',
        name: 'Левин',
      },
    ],
  };
  return photoObject;
}

const objectPhoto = [];
for (let o = 1; o <= 25; o++) {
  const objectPhotoOne = createObject();
  objectPhoto.push(objectPhotoOne);
}

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};
export { objectPhoto };
