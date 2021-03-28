document.body.addEventListener('keydown', moveBlock)

var block = document.querySelector('#blueRect');

function moveBlock(event) {
    var step = 10;
    var blockStyle = block.getAttribute('style');
    var leftRegExp = blockStyle.match('(left): *?(([0-9]*)(px)?);');
    var topRegExp = blockStyle.match('(top): *?(([0-9]*)(px)?);');
    var newValue;

    switch(event.key){
        case 'ArrowRight' :
            newValue = 'left:' + (parseInt(leftRegExp[2]) + step + 'px;');
            block.setAttribute('style', blockStyle.replaceAll(leftRegExp[0], newValue));
            break;
        case 'ArrowLeft' :
            if(positionCheck(parseInt(leftRegExp[2]))){
                newValue = 'left:' + (parseInt(leftRegExp[2]) - step + 'px;');
                block.setAttribute('style', blockStyle.replaceAll(leftRegExp[0], newValue));
            }
            break;
        case 'ArrowUp' :
            if(positionCheck(parseInt(topRegExp[2]))){
                newValue = 'top:' + (parseInt(topRegExp[2]) - step + 'px;');
                block.setAttribute('style', blockStyle.replaceAll(topRegExp[0], newValue));
            }
            break;
        case 'ArrowDown' :
            newValue = 'top:' + (parseInt(topRegExp[2]) + step + 'px;');
            block.setAttribute('style', blockStyle.replaceAll(topRegExp[0], newValue));
            break;
    }
}

function positionCheck(position){
    return position >= 10;
}

/* Так же можно было сделать через обращение к block.style
switch(event.key) {
        case 'ArrowRight' :
            block.style.left = parseInt(block.style.left) + step + 'px';
            break;
        case 'ArrowLeft' :
            if(positionCheck(parseInt(block.style.left))){
                block.style.left = parseInt(block.style.left) - step + 'px';
            }
            break;
        case 'ArrowUp' :
            if(positionCheck(parseInt(block.style.top))){
                block.style.top = parseInt(block.style.top) - step + 'px';
            }
            break;
        case 'ArrowDown' :
            block.style.top = parseInt(block.style.top) + step + 'px';
            break;
} */