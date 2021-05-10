let inputList = document.querySelectorAll('input');

for (let i = 0; i < inputList.length; i++) {

    inputList[i].addEventListener('input', nextValue);

    inputList[i].addEventListener('keydown', prevValue);
}

function nextValue(e){
    let value = e.target.value;
    value >= 0 ? this.nextElementSibling.focus() : e.target.value = value.replace(/[^\d]/g, '');
}

function prevValue(e){
    if(e.keyCode === 8) {
        this.previousElementSibling.value = this.value = null;
        this.previousElementSibling.focus();
    }
}