var userData = {};
const activityTable = {
    1: 1,
    2: 1.3,
    3: 1.5
};

var buttons = document.getElementsByTagName('button');
var gender = document.querySelectorAll('input[name=gender]');
var currentHeight = document.querySelector('input[name=height]');
var currentWeight = document.querySelector('input[name=weight]');
var wishfulWeight = document.querySelector('input[name=wishful-weight]');
var userActivity = document.querySelector('input[name=activity]');
var wishfulResult = document.querySelector('input[name=wish-result]');

currentHeight.addEventListener('input', () => showHeightValue('span[name=height]'));
showHeightValue('span[name=height]');

currentWeight.addEventListener('input', setWeight);
wishfulWeight.addEventListener('input', setWishfulWeight);
currentWeight.addEventListener('keyup', numCheck);
wishfulWeight.addEventListener('keyup', numCheck);
userActivity.addEventListener('input', showActivity);
wishfulResult.addEventListener('input', showWishfulResult);


for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', moveSection);
}

for (var i = 0; i < gender.length; i++){
    gender[i].addEventListener('click', setGenderValue);
}

function numCheck(event){
   event.target.value = event.target.value.replace(/[^\d]/g, '');
}

function moveSection(event){
    var nextSectionNum = event.target.getAttribute('data-page');
    var nextSection = document.querySelector(`.block_${nextSectionNum}`);
    var currentActiveSection = document.querySelector('.active_block');

    currentActiveSection.classList.remove('active_block');
    nextSection.classList.add('active_block');
    if(nextSectionNum === '4') {
        showCalorie(calorieCalculation(userData));
    }
}

function showHeightValue(querySelector){
    var span = document.querySelector(querySelector);
    span.innerText = `${currentHeight.value} см.`;
    setHeight(currentHeight.value);
}

function setGenderValue(event){
    var gender = event.target.getAttribute('data-name');
    var result;

    switch (gender){
        case 'one':
            result = 'male';
            break;
        case 'two':
            result = 'female';
            break
        default:
            result = 'male';
    }

    userData.gender = result;
}

function setHeight(currentHeight){
    userData.height = currentHeight;
}

function setWeight(event){
    var weight = event.target.value;
    userData.weight = weight;
}

function setWishfulWeight(event){
    userData.wishfulWeight = event.target.value;
}

function setActivity(activity){
    userData.activity = activity;
}

function setWishfulResult(value){
    userData.wishfulResult = value;
}

function showActivity(event){
    var value = event.target.value;
    var img = document.querySelector(".active_block img");
    var span = document.querySelector('span[name=activity]');
    switch (value) {
        case '1':
            span.innerText = 'Слабая';
            img.setAttribute('src', './img/sit.jpg');
            break;
        case '2':
            span.innerText = 'Умеренная';
            img.setAttribute('src', './img/fewtimes.jpg');
            break;
        case '3':
            span.innerText = 'Интенсиваня';
            img.setAttribute('src', './img/everyday.jpg');
            break;
    }
    setActivity(value);
}

function showWishfulResult(event){
    var value = event.target.value;
    var img = document.querySelector(".active_block img");
    var span = document.querySelector('span[name=wish-result]');
    switch (value) {
        case '1':
            span.innerText = 'Похудеть';
            img.setAttribute('src', './img/tiny.jpg');
            break;
        case '2':
            span.innerText = 'Набрать мышечную массу';
            img.setAttribute('src', './img/muscle.jpg');
            break;
    }
    setWishfulResult(value);
}

function calorieCalculation(userData){
    var gender = userData.gender ? userData.gender : 'male';
    var height = userData.height;
    var weight = userData.weight;
    var wishfulWeight = userData.wishfulWeight;
    var activityIndex = userData.activity;
    var wishfulResult = userData.wishfulResult;
    var result;

    if (gender === 'male') result = (10 * weight + 6.25 * height + 5) * activityTable[activityIndex];
    if(gender === 'female') result = (10 * weight + 6.25 * height - 161) * activityTable[activityIndex];
    if(wishfulResult === '1') {
        result -= 300;
    } else if(wishfulResult === '2'){
        result += 300;
    }
    wishfulWeight < weight ? result -= 100: result +=100;

    return result;
}

function showCalorie(value){
    var resultSpan = document.querySelector('.active_block span');
    resultSpan.innerText = value;
    console.log(userData);
}




