import { sendData } from "./api.js";

const TAG_ERROR_TEXT = "Неправильно заполнены хештеги";
const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;

const form = document.querySelector(".img-upload__form");
const overlay = document.querySelector(".img-upload__overlay");
const body = document.querySelector("body");
const cancelButton = document.querySelector("#upload-cancel");
const fileField = document.querySelector("#upload-file");
const hashtagField = document.querySelector(".text__hashtags");
const commentField = document.querySelector(".text__discription");

const pristine = new Pristine(form, {
  classTo: "img-upload__field-wrapper",
  errorTextParent: "img-upload__field-wrapper",
  errorTextClass: "img-upload__field-wrapper__error",
});

const isTextFiledFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (evt.key === "Escape" && !isTextFiledFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

function showModal() {
  overlay.classList.remove("hidden");
  body.classList.add("modal-open");
}

function hideModal() {
  overlay.classList.add("hidden");
  body.classList.remove("modal-open");
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
    .split(" ")
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(hashtagField, validateTags, TAG_ERROR_TEXT);

const onFormSubmit = (evt) => {
  // найти форму
  // с помощью формДата,создать тело.
  // с помощью сенДата отправить.
  // обрабботать результат(успех показать шаблон success)
  // в случае ошибки (показать шаблон error).

  // 1. Найти форму
  const form = document.querySelector(".img-upload__form");

  // 2. Обработчик события "submit" для формы
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Предотвратить стандартную отправку формы

    // 3. Создать FormData с данными формы
    const formData = new FormData(form);

    // 4. Отправить данные с помощью sendData
    try {
      const response = await sendData(formData);

      // 5. Обработать результат
      if (response.ok) {
        // 5.1. Успех: показать шаблон success
        showSuccessMessage();
      } else {
        // 5.2. Ошибка: показать шаблон error
        showError(response.status);
      }
    } catch (error) {
      // 5.3. Ошибка: показать шаблон error
      showError(error.message);
    }
  });
  sendData(body);
};

fileField.addEventListener("change", onFileInputChange);
cancelButton.addEventListener("click", onCancelButtonClick);
form.addEventListener("submit", onFormSubmit);

// Обработчик события keydown для документа
document.addEventListener("keydown", onDocumentKeydown);
