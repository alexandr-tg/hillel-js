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

// Second Task

let colors =  ['red', 'green', 'blue'];

let p = document.querySelector('p');

setInterval(changeColor, 1000);

let counter = 0;

function changeColor() {
    counter = (counter + 1) % colors.length;
    p.style.color = colors[counter];
}






