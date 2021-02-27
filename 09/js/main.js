// First task
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};

document.write(`${obj['Петя']} ${obj['Коля']} <br>`);

//Second task
var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
};

document.write(arr['ru'][0] + '<br>');

//Third task
var anotherArr = {
    'ru':['голубой', 'красный', 'зеленый'],

    get colors() {
        return this['ru'].join();
    },

    set addColor(value) {
        this['ru'].push(value);
    }
};

anotherArr.addColor = 'желтый';
document.write(anotherArr.colors);
