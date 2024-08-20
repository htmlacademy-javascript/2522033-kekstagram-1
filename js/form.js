import { sendData } from './api.js';

// Текст ошибки для неправильно заполненных хештегов
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
// Максимальное количество хештегов
const MAX_HASHTAG_COUNT = 5;
// Регулярное выражение для проверки валидности хештега
const VALID_SIMBOLS = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__discription');


// 1. Создаем объект Pristine для валидации формы
const pristine = new Pristine(form, {
  // 2. Указываем, куда добавлять классы при валидации
  classTo: 'img-upload__field-wrapper',
  // 3. Указываем, где отображать сообщения об ошибках
  errorTextParent: 'img-upload__field-wrapper',
  // 4. Указываем класс для сообщений об ошибках
  errorTextClass: 'img-upload__field-wrapper__error',
});

// 5. Функция для проверки валидности одного хештега
const isValidTag = (tag) => VALID_SIMBOLS.test(tag);

// 6. Функция для проверки количества хештегов
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

// 7. Функция для проверки уникальности хештегов
const hasUniqueTags = (tags) => {
  // 8. Преобразуем хештеги в нижний регистр для проверки
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  // 9. Проверяем, что количество хештегов равно размеру множества
  //    (т.е. все хештеги уникальны)
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// 10. Функция для валидации хештегов
const validateTags = (value) => {
  // 11. Разбиваем строку с хештегами на массив
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  // 12. Проверяем, что хештеги валидны по количеству, уникальности и формату
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

// 13. Функция для проверки, фокусирован ли текстовое поле
const isTextFiledFocused = () =>
  // 14. Проверяем, активен ли элемент hashtagField или commentField
  document.activeElement === hashtagField ||
  document.activeElement === commentField;


// найти элемент из шаблона success
const successMessage = document.querySelector('#success');
// обьявить функцию showSuccessMessage
const showSuccessMessage = function(){
  // Клонировать
  const clonedElement = successMessage.content.querySelector('.success').cloneNode(true);
  // вставляем в ДОМ
  document.body.appendChild(clonedElement);
  // Найти элемент кнопка
  const successButton = document.querySelector('.success__button');


  // обьявить функцию onKeydownClick
  function onKeydownClick(event) {
    // в функции проверяем событие Keydown,если Esc то закрыть окно и удалить обработчик onKeydownClick.
    if (event.key === 'Escape') {
      document.removeEventListener('keydown', onKeydownClick);
      clonedElement.remove();
    }
  }
  // Добавить onKeydownClick на Keydown документа.
  document.addEventListener('keydown', onKeydownClick);
  // добавить обрабботчик события на кнопку
  successButton.addEventListener('click',() => {
    // Удалить Элемент из ДОМ
    clonedElement.remove();
    // удалить обработчик события с Esc
    document.removeEventListener('keydown', onKeydownClick);
  });

  // Добавить обработчик события click на клонированный элемент.
  clonedElement.addEventListener('click', (evt) => {
  // в обработчике
  // Если evt.target === клонированному элементу,то
    if (evt.target === clonedElement) {
      // удалить элемент из ДОМ
      clonedElement.remove();
      // и удалить обработчик с Esc
      document.removeEventListener('keydown', onKeydownClick);
    }
  });
};

// Функция при возникновении ошибки отправки формы
// найти элемент из шаблона Error
const errorMessage = document.querySelector('#error');
// обьявить функцию showErrorMessage
const showErrorMessage = function(){
  // Клонировать
  const errorElement = errorMessage.content.querySelector('.error').cloneNode(true);
  // вставляем в ДОМ
  document.body.appendChild(errorElement);
  // Найти элемент кнопка
  const errorButton = document.querySelector('.error__button');


  // обьявить функцию onKeydownClick
  function onKeydownClick(event) {
    // в функции проверяем событие Keydown,если Esc то закрыть окно и удалить обработчик onKeydownClick.
    if (event.key === 'Escape') {
      document.removeEventListener('keydown', onKeydownClick);
      errorElement.remove();
    }
  }
  // Добавить onKeydownClick на Keydown документа.
  document.addEventListener('keydown', onKeydownClick);
  // добавить обрабботчик события на кнопку
  errorButton.addEventListener('click',() => {
    // Удалить Элемент из ДОМ
    errorElement.remove();
    // удалить обработчик события с Esc
    document.removeEventListener('keydown', onKeydownClick);
  });

  // Добавить обработчик события click на клонированный элемент.
  errorElement.addEventListener('click', (evt) => {
  // в обработчике
  // Если evt.target === клонированному элементу,то
    if (evt.target === errorElement) {
      // удалить элемент из ДОМ
      errorElement.remove();
      // и удалить обработчик с Esc
      document.removeEventListener('keydown', onKeydownClick);
    }
  });
};

//  Функция обработчик нажатия клавиши на документе
function onDocumentKeydown(evt) {
  //  Проверяем, была ли нажата клавиша Escape
  if (evt.key === 'Escape' && !isTextFiledFocused()) {
    //  Предотвращаем стандартное поведение Escape (например, закрытие модального окна в браузере)
    evt.preventDefault();
    //  Вызываем функцию hideModal для скрытия модального окна
    hideModal();
  }
}

//  Функция для показа модального окна
function showModal() {
  //  Удаляем класс "hidden" из элемента overlay, делая его видимым
  overlay.classList.remove('hidden');
  //  Добавляем класс "modal-open" к элементу body, чтобы заблокировать прокрутку
  body.classList.add('modal-open');
}

//  Функция для скрытия модального окна
function hideModal() {
  //  Добавляем класс "hidden" к элементу overlay, скрывая его
  overlay.classList.add('hidden');
  //  Удаляем класс "modal-open" из элемента body, чтобы вернуть прокрутку
  body.classList.remove('modal-open');
}

//  Функция обработчик клика по кнопке "Отмена"
const onCancelButtonClick = () => {
  //  Вызываем функцию hideModal для скрытия модального окна
  hideModal();
};

// Получаем выбранный файл
// Если файл выбран, считываем его как данные URL,проверить изображение на форматы jpg png
// вызвать функцию showModal();
// вызвать функцию URL.createObjectURL передать туда загруженный файл
// Заменить изображение из атрибута src полученный URL присвоить в src изображения

const onFileInputChange = (event) => {
// Получаем ссылку на элемент предварительного просмотра
  const imagePreview = document.getElementById('img__upload-pictures');
  // Получаем выбранный файл
  const file = event.target.files[0];
  if (file) {
    // Проверяем формат изображения
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
      // Вызываем функцию showModal() после того, как файл прочитан
      showModal();
      // Получаем URL выбранного файла
      const imageUrl = URL.createObjectURL(file); // Используем URL.createObjectURL
      // Заменяем изображение в атрибуте src
      imagePreview.src = imageUrl;
    }
  }
};
// Добавляем валидатор для поля с хештегами
pristine.addValidator(hashtagField, validateTags, TAG_ERROR_TEXT);

const onFormSubmit = async (evt) => {
  // Предотвращаем стандартное поведение отправки формы (перезагрузка страницы)
  evt.preventDefault();

  //  Создать FormData с данными формы
  const formData = new FormData(form);

  //  Отправить данные с помощью sendData
  try {
    await sendData(formData);
    hideModal();
    showSuccessMessage();
  } catch (error) {
    // Ошибка: показать шаблон error
    showErrorMessage();
  }
};

//  Добавляем обработчик события 'change' для поля выбора файла (fileField)
fileField.addEventListener('change', onFileInputChange);

//  Добавляем обработчик события 'click' для кнопки "Отмена" (cancelButton)
cancelButton.addEventListener('click', onCancelButtonClick);

//  Добавляем обработчик события 'submit' для формы (form)
form.addEventListener('submit', onFormSubmit);

// Обработчик события keydown для документа
document.addEventListener('keydown', onDocumentKeydown);


