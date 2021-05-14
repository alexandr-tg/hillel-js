let inputList = document.querySelectorAll('input');
showCurrentCardNum();

for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('input', nextValue);
    inputList[i].addEventListener('keyup', prevValue);
}

function nextValue(e){
    let value = e.target.value;
    if(value >= 0 && value !== ''){
        this.nextElementSibling.focus();
        setCardCookie(e);
    } else {
        this.value = null;
    }
}

function prevValue(e){
    if(e.keyCode === 8) {
        this.previousElementSibling.focus();
    }
}

function setCardCookie(e) {
    let value = e.target.value;
    let child = e.target;
    let currentCookie = getCookieByKey('card');

    let i = -5;
    while ((child = child.previousElementSibling) !== null){
        i++;
    }

    if(currentCookie === -1) document.cookie = "card=" + value;

    if(currentCookie.length < 12) document.cookie = "card=" + currentCookie + value;

    if(currentCookie.length >= 12) replaceCardCookie(value, i);
}

function getCookieByKey(name){
    let result = -1;

    document.cookie.split(';').forEach(elem => {
        let currentCookie = elem.split('=');
        if(currentCookie[0].trim() === name) result = currentCookie[1];
    });

    return result;
}

function replaceCardCookie(value, index){
    document.cookie = 'card=' + setCharAt(getCookieByKey('card'), index, value);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}


function showCurrentCardNum(){
    let currentCookie = getCookieByKey('card');
    if(currentCookie){
        for (let i = 0; i < currentCookie.length; i++){
            inputList[i].value = currentCookie[i];
        }
    }
}


