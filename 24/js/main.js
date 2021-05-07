// First Task
let divs = document.querySelectorAll('div');
let btn = document.querySelector('button');

btn.addEventListener('click', start);

let cutStr = str => str.substr(0,9);
let addEllipsis = val => val.padEnd(12, '.');


function start(){
    for(let item of divs){
        let text = item.innerText;
        item.innerText = [cutStr, addEllipsis].reduce((value, func) => func(value), text);
    }
}



