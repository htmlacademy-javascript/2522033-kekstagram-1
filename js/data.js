import { getRandomIntInclusive } from './util.js';
const object = {
  id: 1,
  url: `photos/${ 2 }.jpg`,
  description: 'Красивое фото',
  likes: getRandomIntInclusive(15, 200),
  comments: [
    {
      id: 130,
      avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
      message: 'В целом всё неплохо. Но не всё хорошо.',
      name: 'Артём Левин',
    },
  ],
};
