var options = "toolbar=0,scrollbars=0,menubar=0,location=0,status=0,titlebar=0,directories=0,width=500,height=500";
var newWin = window.open('', 'Frontend', options);
newWin.document.body.innerHTML = `<img src="${getAbsoluteImgPath('img/cat.jpg')}" alt="">`;

var intervalID = newWin.setInterval(moveWindow, 1000, newWin);
var timeoutID = newWin.setTimeout(closeWindow, 15000, newWin);

if(newWin.closed) stopInterval(intervalID);

function moveWindow(window) {
    window.moveTo(Math.random() * window.opener.innerWidth, Math.random() * window.opener.innerHeight);
}

function closeWindow(window) {
    window.close();
}

function stopInterval(id) {
    clearInterval(id);
}

function getAbsoluteImgPath(path){
    var img = new Image();
    img.src = path;
    return img.src;
}