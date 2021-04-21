var typeOption = document.querySelector('select[name=model]');
var timeRange = document.querySelector('input[name=time-range]');
var isPilot = document.querySelector('input[name=enabled]');
var sumSpan = document.querySelector('span[name=sum]');


typeOption.addEventListener('change', showModelInfo);
timeRange.addEventListener('input', showRangeValue);
typeOption.addEventListener('change', showSum);
timeRange.addEventListener('change', showSum);
isPilot.addEventListener('change', showSum);

showRangeValue();
showModelInfo();




function showModelInfo(){
    var img = document.querySelector('img');
    var model = typeOption.options[typeOption.selectedIndex].text;
    switch (model) {
        case 'Pipistrel Virus SW':
            img.setAttribute('src', 'img/pipistrel.jpg')
            break;
        case 'Cessna 172':
            img.setAttribute('src', 'img/cessna.jpg')
            break;
        case 'Piper Aerostar 700 Superstar':
            img.setAttribute('src', 'img/piper.jpg')
            break;
        case 'BeachCraft King Air 200':
            img.setAttribute('src', 'img/beachcraft.jpg')
            break;
        case 'Cirrus Vision Jet':
            img.setAttribute('src', 'img/cirrus.png')
            break;
        default:
            img.setAttribute('src', 'img/default.jpg')
            break;
    }
}

function showRangeValue(){
    var timeValueSpan = document.querySelector('span[name=timeValue]');
    timeValueSpan.innerText = timeRange.value;
}

function showSum(){
    var pricePerHour = typeOption.value;
    var numberOfHours = timeRange.value;
    var doesPilotNeed = isPilot.checked ? 1000 : 0;
    sumSpan.innerText = (pricePerHour * numberOfHours) + doesPilotNeed + ' грн.';
}