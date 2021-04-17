// First Task
const firstInput = document.querySelector('input[data-name="first"]');
const secondInput = document.querySelector('input[data-name="second"]');
const thirdInput = document.querySelector('input[data-name="third"]');
const allSumInput = document.querySelector('input[data-name="allSumInput"]');

const submitBtn = document.querySelector('input[data-submit="totalSum"]');
submitBtn.addEventListener('click', sum);

function sum(){
    if(!emptyCheck(firstInput.value) && !emptyCheck(secondInput.value) && !emptyCheck(thirdInput.value)) {
        if(isIntegerCheck(parseInt(firstInput.value)) && isIntegerCheck(parseInt(secondInput.value)) && isIntegerCheck(parseInt(thirdInput.value))){
            allSumInput.value = parseInt(firstInput.value) + parseInt(secondInput.value) + parseInt(thirdInput.value);
        }
    }
}

function emptyCheck(value) {
    return value === '';
}

function isIntegerCheck(value) {
    if(!isNaN(value) && typeof value === 'number') return true;
    return false;
}

// Second Task
const input = document.querySelector('input[data-name="num"]');
const result = document.querySelector('div[data-name="sumNum"]');
input.addEventListener('blur', showSum);

function showSum(){
    result.innerText = input.value.split('').reduce((a,b) => a*1 + b*1);
}