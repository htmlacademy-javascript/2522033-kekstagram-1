// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  // Проверяем, меньше ли длина строки указанной максимальной длины
  if (str.length <= maxLength) {
    return true; // Если да, возвращаем true
  } else {
    return false; // Если нет, возвращаем false
  }
}

let xyz = checkStringLength("Работает!!!", 2);
console.log(xyz);
let obj = { name: 4, age: 25 };
let ar = ["Vasiya", "Petiya", "Vova"];
console.log(obj.name);
console.log(ar[1]);

// нужна функция которая будет возвращать случайное число в заданном диапазоне
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

let object = {
  id: 1,
  url: "photos/" + 2 + ".jpg",
  description: "Красивое фото",
  likes: getRandomIntInclusive(15, 200),
  comments: [
    {
      id: 130,
      avatar: "img/avatar-" + getRandomIntInclusive(1, 6) + ".svg",
      message: "В целом всё неплохо. Но не всё хорошо.",
      name: "Артём Левин",
    },
  ],
};
console.log(object);

// начало функции создатьОбъект
// переменная объектФотографии присвоить какой то объект
// вернуть объектФотографии
// конец функции
function createObject(name, date, size) {
  let photoObject = {
    id: 2,
    url: "photos/" + 3 + ".jpg",
    description: "Просто фото",
    likes: getRandomIntInclusive(15, 200),
    comments: [
      {
        id: 13,
        avatar: "img/avatar-" + getRandomIntInclusive(1, 6) + ".svg",
        message: "В целом всё неплохо. Но не всё хорошо.",
        name: "Левин",
      },
    ],
  };
  return photoObject;
}
console.log(createObject);
// переменная объектыФотографий и присвоим в переменную пустой массив
// от ноля до двадцати пяти повторить:
// переменная объектФотографии и присваиваем результат вызова функцию создатьОбъект
// в объектыФотографий добавить объектФотографии
// конец;
let objectPhoto = [];
for (let o = 1; o <= 25; o++) {
  let objectPhotoOne = createObject();
  objectPhoto.push(objectPhotoOne);
}
console.log(objectPhoto);

// выведем в коносоль объектыФотографий ;
