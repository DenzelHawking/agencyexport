let newsText = document.querySelectorAll('.news-text');
let newsItem = document.querySelectorAll('.news-item');
let visibleHeight = newsText[0].clientHeight;
let showAllText = document.querySelectorAll('.show-hide-description');

for (let i = 0; i < newsText.length; i++) {
    let visibleHeight = newsText[i].clientHeight;
    let fullHeight = newsText[i].scrollHeight;
    if (fullHeight > visibleHeight) {
        newsText[i].classList.add('hide-text');
        newsItem[i].classList.add('shorting-text')
    }
};

showAllText.forEach((elem, index) => {
    elem.onclick = () => {
        if (elem.classList.contains('openned')) {
            newsText[index].style.height = `${visibleHeight}px`;
            newsText[index].classList.add('hide-text');
            elem.classList.remove('openned');
            elem.innerHTML = 'Показать все';
        } else {
            newsText[index].style.height = `${newsText[index].scrollHeight}px`;
            newsText[index].classList.remove('hide-text');
            elem.classList.add('openned');
            elem.innerHTML = 'Скрыть';
        };
    };
});