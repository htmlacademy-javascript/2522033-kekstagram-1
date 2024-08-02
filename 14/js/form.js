import { sendData } from './api.js';
// найти элемент из шаблона success
const SuccessMessage = document.querySelector('#success');
// обьявить функцию showSuccessMessage
const showSuccessMessage = function(){
  // Клонировать
  const clonedElement = SuccessMessage.content.querySelector('.success').cloneNode(true);
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


const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__discription');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isTextFiledFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFiledFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

function showModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function hideModal() {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SIMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(hashtagField, validateTags, TAG_ERROR_TEXT);

const onFormSubmit = async (evt) => {
  evt.preventDefault();
  // найти форму
  // с помощью формДата,создать тело.
  // с помощью сенДата отправить.
  // обрабботать результат(успех показать шаблон success)
  // в случае ошибки (показать шаблон error).

  // 2. Создать FormData с данными формы
  const formData = new FormData(form);

  // 4. Отправить данные с помощью sendData
  try {
    await sendData(formData);
    hideModal();
    showSuccessMessage();
  } catch (error) {
    // 4.3. Ошибка: показать шаблон error
    showErrorMessage();
  }
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

// Обработчик события keydown для документа
document.addEventListener('keydown', onDocumentKeydown);
