let servicesItem = document.querySelectorAll('.services__item');
let servicesHeight = servicesItem[0].clientHeight

servicesItem.forEach(elem => {
  elem.onclick = () => {
    if (elem.classList.contains('openned')) {
      elem.style.height = `${servicesHeight}px`;
      elem.classList.remove('openned');
    } else {
      elem.style.height = `${elem.scrollHeight}px`;
      elem.classList.add('openned');
    };
  };
});