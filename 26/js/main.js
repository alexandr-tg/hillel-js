let inputList = document.querySelectorAll('input');

for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('input', nextValue);
    inputList[i].addEventListener('keyup', prevValue);
}

function nextValue(e){
    let value = e.target.value;
    value >= 0 && value !== '' ? this.nextElementSibling.focus() : this.value = null;
}

function prevValue(e){
    if(e.keyCode === 8) this.previousElementSibling.focus();
}