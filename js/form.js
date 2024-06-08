// объявить функцию "открыть форму"
function openForm() {
  document.body.classList.add(".modal-open");
  document.querySelector(".img-upload__overlay").classList.remove("hidden");
}
// в функции,добавить класс боди модал опен
// удалить у 'формы редакирования изображения' класс hidden
//
// обьявит фунцию 'закрыть форму'
function closeForm() {
  document.body.classList.remove("modal-open");
  document.querySelector(".img-upload__overlay").classList.add("hidden");
}
// в функции,удалить класс модал опен у Боди
// добавить у формы редактирования изображения класс hidden
//
// найти элемент красной кнопки
// Нахождение кнопки "Открыть форму"
let openFormButton = document.querySelector(".img-upload__label");
openFormButton.addEventListener("click", () => {
  openForm();
});
// добавить к элементу кнопки,обработчик клика
// в обрабботчике клика,вызвать функцию 'открыть форму'
//
// найти элемент кнопка закрыть форму,
let closeFormButton = document.querySelector("#upload-cancel");
// добавить ему обработчик в обработчике
closeFormButton.addEventListener("click", () => {
  // вызвать функцию 'закрыть форму'
  closeForm();
});
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeForm();
  }
});
// добавить обработчик события keydown на документ
// в обработчике проверить клавишу,если esc вызвать функцию,закрыть форму.
// ==================================================================================

// обьявить функцию валидэйт хештэг
// функция принимает 1 параметр с названием хештег
// если хештег начинается начинается не с # вернуть false
// если длинна хештега,больше 20 символов,вернуть false
// если хештег содержит пробелы,вернуть false

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeForm();
  }
});
function validateHashtag(hashtag) {
  if (!hashtag.startsWith("#")) {
    return false;
  }
  if (hashtag.length > 20) {
    return false;
  }
  if (hashtag.includes(" ")) {
    return false;
  }
  return true;
}
