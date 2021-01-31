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
