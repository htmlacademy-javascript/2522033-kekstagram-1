const imgElement = document.querySelector('.big-picture__img img');
const textElement = document.querySelector('.likes-count');
const captionElement = document.querySelector('.social__caption');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('#picture-cancel');

const downloadButton = document.querySelector('.social__comments-loader');
const commentElement = document.querySelector('.social__comment-count');
const commentsContainer = document.querySelector('.social__comments');
let buttonClick = null;

// Определяет функцию createComment, которая принимает объект comment в качестве аргумента.
const createComment = function (comment) {
  // Создаем элемент списка (li) для комментария
  const li = document.createElement('li');
  // Добавляем класс "social__comment" к элементу li
  li.classList.add('social__comment');
  // Создаем элемент изображения (img) для аватара
  const img = document.createElement('img');
  // Добавляем класс "social__picture" к элементу img
  img.classList.add('social__picture');
  // Устанавливаем источник изображения аватара
  img.src = comment.avatar;
  // Добавляем элемент изображения (img) в элемент списка (li)
  li.appendChild(img);
  // Создаем элемент абзаца (p) для текста комментария
  const p = document.createElement('p');
  // Добавляем класс "social__text" к элементу p
  p.classList.add('social__text');
  // Устанавливаем текст комментария
  p.textContent = comment.message;
  // Добавляем элемент абзаца (p) в элемент списка (li)
  li.appendChild(p);
  // Возвращаем созданный элемент списка (li)
  return li;
};

function openBigPicture() {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
}
// Функция для закрытия окна
function closeBigPicture() {
  // Удаляем класс modal-open у body
  document.body.classList.remove('modal-open');
  // Добавляем класс hidden к big-picture
  bigPicture.classList.add('hidden');
  if (buttonClick !== null) {
    downloadButton.removeEventListener('click', buttonClick);
  }
}
// Обработчик нажатия на кнопку закрытия
closeButton.addEventListener('click', closeBigPicture);
// Обработчик нажатия на клавишу Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
});

const renderComments = function (comments) {
  // 1. Очищаем контейнер комментариев
  commentsContainer.innerHTML = '';
  // 2. Инициализируем счетчик отображаемых комментариев
  let displayedCommentsCount = 0;
  // 3. Получаем общее количество комментариев
  const totalCommentsCount = comments.length;

  // 4. Функция для обновления текста элемента commentElement
  function updateCommentCount() {
    commentElement.textContent = `(${displayedCommentsCount}/${totalCommentsCount})`;
  }
  // 5. Функция для загрузки дополнительных комментариев
  function loadMoreComments() {
    // 6. Определяем максимальное количество комментариев для отображения
    const maxToDisplay = Math.min(displayedCommentsCount + 5, totalCommentsCount);
    // 7. Цикл для отображения следующих 5 комментариев
    for (let i = displayedCommentsCount; i < maxToDisplay; i++) {
      // 8. Создаем элемент комментария с помощью функции createComment
      //    и добавляем его в контейнер commentsContainer
      commentsContainer.appendChild(createComment(comments[i]));
    }
    // 9. Обновляем счетчик отображаемых комментариев
    displayedCommentsCount = maxToDisplay;
    // 10. Обновляем текст элемента, отображающего количество комментариев
    updateCommentCount();
    // 11. Если все комментарии уже отображены, скрываем кнопку "Загрузить больше"
    if (displayedCommentsCount >= totalCommentsCount) {
      downloadButton.classList.add('hidden');
    }else{
      // Делаем кнопку видимой
      downloadButton.classList.remove('hidden');
      // Создаем функцию, которая будет вызываться при нажатии на кнопку
      buttonClick = () => {
      // Загружаем дополнительные комментарии
        loadMoreComments();
      };

      // 12. Добавляем обработчик события 'click' к кнопке "Загрузить ещё"
      downloadButton.addEventListener('click', buttonClick, {once: true});
    }
  }

  // 13. Вызываем функцию loadMoreComments для отображения первых 5 комментариев
  loadMoreComments();

};
// Определяем функцию renderBigPicture, которая принимает объект picture в качестве аргумента.
const renderBigPicture = function (picture) {
  // Устанавливаем текст описания в элемент captionElement
  captionElement.textContent = picture.description;
  // Загружаем изображение в imgElement
  imgElement.src = picture.url;
  // Устанавливаем количество лайков в элемент textElement
  textElement.textContent = picture.likes;
  // Отрисовываем комментарии
  renderComments(picture.comments);
  // Открываем модальное окно с большой картинкой
  openBigPicture();
};

export { renderBigPicture };
