const createComment = function (comment) {
  const li = document.createElement('li');
  //создаем элемент li (document.createElement)
  li.classList.add('social__comment');
  //назначать элементу li класс (li.classList.add)
  const img = document.createElement('img');
  //создать элемент img
  img.classList.add('social__picture');
  //добавить класс к img
  img.src = comment.avatar;
  // добавить атрибут src из comment.avatar
  li.appendChild(img);
  //добавить в элемент li элемент img (appendChild)
  const p = document.createElement('p');
  p.classList.add('social__text');
  const commentText = comment.message;
  p.textContent = commentText;
  li.appendChild(p);
  return li;
  // Создать Элемент P
  // добавить ему правильный класс
  // записать ему в текст контент коммент текст
  // добавить его в li
  // вернуть элемент li(return)
};
const bigPicture = document.querySelector('.big-picture');
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
}
const closeButton = document.querySelector('#picture-cancel');
// Обработчик нажатия на кнопку закрытия
closeButton.addEventListener('click', closeBigPicture);
// Обработчик нажатия на клавишу Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
});

const renderComments = function (comments) {
  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  const loadMoreButton = document.querySelector('.social__comments-loader');
  const commentCountElement = document.querySelector('.social__comment-count');

  let displayedCommentsCount = 0;
  const totalCommentsCount = comments.length;

  // Принимает массив comments в качестве аргумента.
  // Получает ссылки на элементы DOM: commentsContainer, loadMoreButton, commentCountElement.
  // Инициализирует displayedCommentsCount (5) и totalCommentsCount (длина массива comments).
  // Вызывает updateCommentCount() для обновления начального числа комментариев.

  function updateCommentCount() {
    commentCountElement.textContent = `(${displayedCommentsCount}/${totalCommentsCount})`;
  }
  // Обновляет текст элемента commentCountElement, показывая displayedCommentsCount из totalCommentsCount.

  function loadMoreComments() {
    for (
      let i = displayedCommentsCount;
      i < displayedCommentsCount + 5 && i < totalCommentsCount;
      i++
    ) {
      const comment = comments[i];
      const commentElement = createComment(comment);
      commentsContainer.appendChild(commentElement);
    }

    displayedCommentsCount =
      displayedCommentsCount + 5 > totalCommentsCount
        ? totalCommentsCount
        : displayedCommentsCount + 5;
    updateCommentCount();

    if (displayedCommentsCount >= totalCommentsCount) {
      loadMoreButton.style.display = 'none';
    }
  }

  // В цикле for добавляет по 5 комментариев в commentsContainer, начиная с displayedCommentsCount.
  // Обновляет displayedCommentsCount и вызывает updateCommentCount().
  // Скрывает loadMoreButton, если все комментарии отображены.

  // Отображение первых 5 комментариев
  loadMoreComments();

  // Обработчик клика на кнопку "Загрузить ещё" class="social__comments-loader comments-loader"
  loadMoreButton.addEventListener('click', loadMoreComments);
};
// Вызывает loadMoreComments() для отображения первых 5 комментариев.
// Добавляет обработчик клика к loadMoreButton, который вызывает loadMoreComments().

//В параметрах функции получаем массив коментариев,которые нужно отрисовать.
//нужно отловить событие нажав на кнопку 'загрузить еще'
//добавляем по 5 комментариев
//понять длинну массива коментариев
//когда коментарии заканчиваются,прятать кнопку 'загрузить еще'
//изменить счетчик комментариев,согласно числу загруженных коментариев.

const renderBigPicture = function (picture) {
  const imgElement = document.querySelector('.big-picture__img img');
  const textElement = document.querySelector('.likes-count');
  const captionElement = document.querySelector('.social__caption');
  captionElement.textContent = picture.description;
  // найти элемент с классом "social__caption"
  // присвоить ему в текст picture discription

  imgElement.src = picture.url;
  textElement.textContent = picture.likes;

  renderComments(picture.comments);
  openBigPicture();
};

export { renderBigPicture };
