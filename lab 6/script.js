window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
const preloader = document.querySelector(".preloader");
const container = document.querySelector(".container");
const container_big_image = document.querySelector(".container_big_image");
const expandIMG = document.createElement("img");
const button = document.createElement("span");
const bigImgDiv = document.querySelector('.container_big_image');
const backgr = document.getElementById('backgr');


var list = [];

list = document.querySelector('gallery').getAttribute('Images').split(';');


function show_gallery() {
  for (let i = 0; i < list.length; i++) {
    let image = document.createElement("img");
    image.src = list[i];
    image.style.width = "100%";

    let div = document.createElement("div");
    div.className = "column";

    image.addEventListener('click', () => {
      console.log(1);
      let bigImg = document.querySelector('.big');
      bigImg.setAttribute('src', image.getAttribute('src'));
      bigImgDiv.style.display = "block";
      backgr.style.display = "block";
    })
    div.append(image);
    container.append(div);
  }
}
document.querySelector('.close').addEventListener('click', () => {
  let bigImgDiv = document.querySelector('.container_big_image');
  bigImgDiv.style.display = 'none';
  backgr.style.display = "none";
})



show_gallery();