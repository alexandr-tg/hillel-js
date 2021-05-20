let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    cookieExpires = new Date(Date.now() + 10000).toUTCString();

today = `${dd}/${mm}/${yyyy}`;


if(!isVisitedEarly()) {
    setVisitStatus();
    setCookie('name', 'Igor', cookieExpires);
    setCookie('entryDate', today, cookieExpires);
}

let isCookie = getCookieByKey('name') && getCookieByKey('entryDate');
if (isCookie) document.body.innerText = 'Welcome';

if (performance.navigation.type === 1 && isCookie) {
    setCookie('name', 'Igor', cookieExpires);
    setCookie('entryDate', today, cookieExpires);
};

if(performance.navigation.type === 1 && !isCookie){
    document.body.innerHTML = `<span>Пожалуйста, обновите куки!</span><br><input type="button" value="Update me!">`;
    let button = document.querySelector('input');
    button.addEventListener('click', () =>{
        setCookie('name', 'Igor', cookieExpires);
        setCookie('entryDate', today, cookieExpires);
        document.body.innerText = 'Welcome';
    });
}


function getCookieByKey(name){
    let result = false;

    document.cookie.split(';').forEach(elem => {
        let currentCookie = elem.split('=');
        if(currentCookie[0].trim() === name) result = currentCookie[1];
    });

    return result;
}

function setCookie(name, value, expires = false){
    document.cookie = `${name}=${value};expires=${expires}`;
}

function isVisitedEarly(){
    return getCookieByKey('isVisited');
}

function setVisitStatus() {
    setCookie('isVisited', true);
}