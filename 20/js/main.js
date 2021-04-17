// First Task
const firstInput = document.querySelector('input[data-name="first"]');
const secondInput = document.querySelector('input[data-name="second"]');
const thirdInput = document.querySelector('input[data-name="third"]');
const allSumInput = document.querySelector('input[data-name="allSumInput"]');

const submitBtn = document.querySelector('input[data-submit="totalSum"]');
submitBtn.addEventListener('click', sum);


function sum(){
    var validFirstValue = validation(firstInput.value);
    var validSecondValue = validation(secondInput.value);
    var validThirdValue = validation(thirdInput.value);
    if(validFirstValue && validSecondValue && validThirdValue) {
        allSumInput.value = validFirstValue + validSecondValue + validThirdValue;
    }
}

function validation(value){
    if(!emptyCheck(value)) {
        var result = parseInt(value);
        if (isNumCheck(result)){
            return result;
        }
    }
}

function emptyCheck(value) {
    return value === '';
}

function isNumCheck(value) {
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