let sliderIMG = document.querySelectorAll('.slider-img');
let dotsBlock = document.querySelector('.slider-dots');
let prevDot = 0;
let presDot = 0;

for (let i = 0; i < sliderIMG.length; i++) {
    let dotItem = document.createElement('div');
    dotItem.classList.add('dot-item');
    dotsBlock.appendChild(dotItem);
}

let dot = document.querySelectorAll('.dot-item');
dot[0].classList.add('active');

dot.forEach((elem, index) => {
    elem.onclick = () => changeSlider(index);
});


setInterval(() => {
    let index = presDot;
    index >= dot.length - 1 ? index = 0 : index++;
    changeSlider(index)
}, 5000);

function changeSlider(index) {
    prevDot = presDot;
    presDot = index;

    dot[prevDot].classList.remove('active');
    dot[presDot].classList.add('active');

    sliderIMG[prevDot].classList.remove('active');
    sliderIMG[presDot].classList.add('active');
};