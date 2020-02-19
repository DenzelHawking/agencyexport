let menu = document.querySelector('.header__menu');
let menuButton = document.querySelector('.menu-button');

menuButton.onclick = () => {
    menuButton.classList.toggle('active');
    menu.classList.toggle('is-open');
};