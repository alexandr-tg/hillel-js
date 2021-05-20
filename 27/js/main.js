let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    cookieExpires = new Date(Date.now() + 10000).toUTCString();

today = `${dd}/${mm}/${yyyy}`;

//Проверка на первое посещение
if(!isVisitedEarly()) {
    setVisitStatus();
    setNameAndEntryDateCookie();
} else {
    showUpdateCookieInfo();
}

//Если куки есть, отображаем фразу Welcome
let isCookie = getCookieByKey('name') && getCookieByKey('entryDate');
if (isCookie) document.body.innerText = 'Welcome';

//Если после обновледия страници куки все еще живи перегружаем их
if (performance.navigation.type === 1 && isCookie) {
    setNameAndEntryDateCookie();
}

//Если после обновления страници куки мертвы, просим обновить их
if(performance.navigation.type === 1 && !isCookie){
    showUpdateCookieInfo();
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

function setNameAndEntryDateCookie(){
    setCookie('name', 'Igor', cookieExpires);
    setCookie('entryDate', today, cookieExpires);
}

function showUpdateCookieInfo(){
    document.body.innerHTML = `<span>Пожалуйста, обновите куки!</span><br><input type="button" value="Update me!">`;
    let button = document.querySelector('input');
    button.addEventListener('click', () =>{
        setNameAndEntryDateCookie();
        document.body.innerText = 'Welcome';
    });
}