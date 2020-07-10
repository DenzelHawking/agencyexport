let menu = document.querySelector('.header__menu');
let menuButton = document.querySelector('.menu-button');

menuButton.onclick = () => {
  menuButton.classList.toggle('active');
  menu.classList.toggle('is-open');
};


let logo = document.querySelector('#logo').parentElement;

let logoTj = logo.href.match(/_tj.html/);
let logoEn = logo.href.match(/_en.html/);


if (logoTj) {
  logo.classList.add('tj');
} else if (logoEn) {
  logo.classList.add('en');
} else {
  logo.classList.add('ru');
}