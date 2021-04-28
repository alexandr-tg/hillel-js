var buttons = document.getElementsByTagName('button');
var gender = document.querySelectorAll('input[name=gender]');
var currentHeight = document.querySelector('input[name=height]');
var currentWeight = document.querySelector('input[name=weight]');
var wishfulWeight = document.querySelector('input[name=wishful-weight]');
var userActivity = document.querySelector('input[name=activity]');

currentHeight.addEventListener('input', () => showRangeValue('span[name=height]'));
showRangeValue('span[name=height]');

currentWeight.addEventListener('input', getWeight);
wishfulWeight.addEventListener('input', getWeight);
userActivity.addEventListener('input', showActivity);


for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', moveSection);
}

for (var i = 0; i < gender.length; i++){
    gender[i].addEventListener('click', getGenderValue);
}

function moveSection(event){
    var nextSectionNum = event.target.getAttribute('data-page');
    var nextSection = document.querySelector(`.block_${nextSectionNum}`);
    var currentActiveSection = document.querySelector('.active_block');

    currentActiveSection.classList.remove('active_block');
    nextSection.classList.add('active_block');
}

function showRangeValue(querySelector){
    var heightSpan = document.querySelector(querySelector);
    heightSpan.innerText = `${currentHeight.value} см.`;
}

function getGenderValue(event){
    var gender = event.target.getAttribute('data-name');
    var result;

    switch (gender){
        case 'one':
            result = 'male';
            break;
        case 'two':
            result = 'female';
    }
    return result;
}

function getWeight(event){
    var weight = event.target.value;
    console.log(weight);
}

function showActivity(event){
    var value = event.target.value;
    var img = document.querySelector("img");
    var span = document.querySelector('span[name=activity]');
    switch (value) {
        case '1':
            span.innerText = 'Нет физической нагрузки';
            img.setAttribute('src', './img/sit.jpg');
            break;
        case '2':
            span.innerText = 'Тренировки несколько раз в неделю';
            img.setAttribute('src', './img/fewtimes.jpg');
            break;
        case '3':
            span.innerText = 'Ежедневные тренировки';
            img.setAttribute('src', './img/everyday.jpg');
            break;
    }
}

