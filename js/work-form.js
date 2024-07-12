// Получаем форму и применяем к ней валидацию через библиотеку Pristine
let form = document.querySelector("form");
let pristine = new Pristine(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Проверка валидности формы перед отправкой
  if (!pristine.validate()) {
    // Если форма не валидна, отменяем отправку и выводим сообщение об ошибке
    alert("Пожалуйста, заполните форму правильно");
  } else {
    // Если форма валидна, можно отправить данные на сервер
    // Например, можно использовать Fetch API для отправки данных на сервер
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          // Показать пользователю успешный результат отправки формы
        } else {
          // Показать ошибку отправки формы
        }
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Ошибка при отправке формы:", error);
      });
  }
});

// Добавление обработчика сброса значений при закрытии формы
let closeButton = document.querySelector("#upload-cancel");
closeButton.addEventListener("click", function () {
  form.reset();
  document.getElementById("upload-file").value = "";
});
