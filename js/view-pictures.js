let img = document.querySelectorAll('.img-list');
let chooseImg = document.querySelector('.choose-img');
let sliderButtonLeft = document.querySelector('.slider-button-left');
let sliderButtonRight = document.querySelector('.slider-button-right');
let exits = document.querySelector('.exits');
let index;

exits.addEventListener('click', close);
sliderButtonLeft.addEventListener('click', left);
sliderButtonRight.addEventListener('click', right);

img.forEach(function (elem, item) {
  elem.onclick = function () {
    document.body.classList.add('view-img');
    chooseImg.src = img[item].src;
    index = item;
  };
});

function close() {
  document.body.classList.remove('view-img');
};

function left() {
  if(index <= 0) {
    index = img.length - 1;
  } else {
    index = index - 1;
  };
  chooseImg.src = img[index].src;
};

function right() {
  if(index >= img.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  };
  chooseImg.src = img[index].src;
};
