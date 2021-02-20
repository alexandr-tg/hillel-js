// First task
var abc = 'aaa bbb ccc';

var subStr = abc.substr(4, 3);
var subString = abc.substring(4,7);
var slice = abc.slice(4,7);

console.log(subStr);
console.log(subString);
console.log(slice);

// Second task
var iLearnJS = 'я учу javascript!';
var capCharStr = firstCharToCap(iLearnJS);
console.log(capCharStr);

// Third task
var testText = 'var_test_text';
var result = testText.split('_').reduce( function (acc, curr, index) {
    if (index > 0) curr = firstCharToCap(curr);
    return acc+curr;
});

console.log(result);

//Fourth task
console.log(Math.round(Math.random() * 50));





function firstCharToCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}