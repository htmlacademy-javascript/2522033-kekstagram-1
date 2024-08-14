import { getRandomIntInclusive } from './util.js';

function createObject() {
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


export { objectPhoto };
