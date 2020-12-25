const slider = document.querySelector('.wigets-slider');
const sliderInner = document.querySelector('.wigets-slider__inner');
const sliderItem = document.querySelectorAll('.wigets-slider__item');
const documentWidth = document.body.clientWidth;

let amountWigets;

if (documentWidth > 800) {
  amountWigets = 4;
} else if (documentWidth <= 800 && documentWidth > 500) {
  amountWigets = 3;
} else if (documentWidth <= 500) {
  amountWigets = 2;
}

let sliderItemWidth = slider.clientWidth / amountWigets;
let transformPosition = 0;
let transformSize;


for (let i = 0; i < sliderItem.length; i++) {
  sliderItem[i].style.width = `${sliderItemWidth - 10}px`;
}

setInterval(() => moveSlider(amountWigets, -(sliderItemWidth)), 5000);


function moveSlider(amoutn = 0, size) {
  let maxWidth = -((sliderItem.length * (sliderItemWidth)) - slider.clientWidth);

  if (transformPosition == maxWidth) transformSize = -transformSize;
  if (transformPosition == 0) transformSize = size * amoutn;

  transformPosition += transformSize;

  if (transformPosition > 0) transformPosition = 0;
  if (transformPosition < maxWidth) transformPosition = maxWidth;

  sliderInner.style.transform = `translateX(${transformPosition}px)`;
}