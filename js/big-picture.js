let createComment = function (comment) {
  let li = document.createElement("li");
  //создаем элемент li (document.createElement)
  li.classList.add("social__li");
  //назначать элементу li класс (li.classList.add)
  let img = document.createElement("img");
  //создать элемент img
  img.classList.add("social__picture");
  //добавить класс к img
  img.src = comment.avatar;
  // добавить атрибут src из comment.avatar
  li.appendChild(img);
  //добавить в элемент li элемент img (appendChild)
  return li;
  // вернуть элемент li(return)
};
let bigPicture = document.querySelector(".big-picture");
function openBigPicture() {
  bigPicture.querySelector(".social__comment-count").classList.add("hidden");
  bigPicture.querySelector(".comments-loader").classList.add("hidden");
  document.body.classList.add("modal-open");
  bigPicture.classList.remove("hidden");
}
// Функция для закрытия окна
function closeBigPicture() {
  // Удаляем класс modal-open у body
  document.body.classList.remove("modal-open");

  // Добавляем класс hidden к big-picture
  bigPicture.classList.add("hidden");
}
let closeButton = document.querySelector("#picture-cancel");
// Обработчик нажатия на кнопку закрытия
closeButton.addEventListener("click", closeBigPicture);
// Обработчик нажатия на клавишу Esc
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeBigPicture();
  }
});
console.log(createComment);

let renderBigPicture = function (picture) {
  let imgElement = document.querySelector(".big-picture__img img");
  let textElement = document.querySelector(".likes-count");
  let commentElement = document.querySelector(".comments-count");
  imgElement.src = picture.url;
  textElement.textContent = picture.likes;
  commentElement.textContent = picture.comments.length;
  let commentsContainer = document.querySelector(".social__comments");
  for (let i = 0; picture.comments.length > i; i++) {
    let comment = picture.comments[i];
    let commentElement = createComment(comment);
    commentsContainer.appendChild(commentElement);
  }
  renderComments(picture.comments);
  openBigPicture();
};

export { renderBigPicture };
