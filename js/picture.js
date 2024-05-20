let template = document.querySelector("#picture");
let createElement = function (picture) {
  let element = template.content.cloneNode(true);
  let img = element.querySelector(".picture__img");
  img.src = picture.url;
  let likes = element.querySelector(".picture__likes");
  likes.textContent = picture.likes;
  let comments = element.querySelector(".picture__comments");
  comments.textContent = picture.comments.length;
  return element;
};

let renderPictures = function (pictures) {
  let picturesContainer = document.querySelector(".pictures");
  for (let i = 0; pictures.length > i; i++) {
    let picture = pictures[i];
    let x2 = createElement(picture);
    picturesContainer.appendChild(x2);
  }
};
export { renderPictures };
