//2.1
var age = prompt('How old is you?'),
    isSmoke = confirm('Do you smoke?');

if(age < 18 && !isSmoke){
    alert('Так держать!');
} else if(age < 18 && isSmoke) {
    alert('Маме расскажу');
}

if(age > 18 && !isSmoke){
    alert('Молодец и не надо');
} else if(age > 18 && isSmoke){
    alert('Ну и зря');
}

//2.2
var x = +prompt('Введите число'),
    y = +prompt('Введите еще одно число');

if (x > y) {
    alert('Число ' + x + ' больше числа ' + y);
} else if(x < y) {
    alert(('Число ' + y + ' больше числа ' + x));
} else {
    alert('Они равны!');
}
