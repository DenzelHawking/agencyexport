// mainInput.forEach((elem, index) => inputFocus(elem, index, signInInput, 'sign-in-input-focus'));
// mainRegistInput.forEach((elem, index) => inputFocus(elem, index, registInput, 'registration-input-focus'));



let mapInputs = document.querySelectorAll('.form-control')

function inputFocus(elem, index, inputItem, classFocus) {
  elem.onfocus = () => inputItem[index].classList.add(classFocus);
  elem.onblur = () => elem.value == '' ? inputItem[index].classList.remove(classFocus) : elem;
};