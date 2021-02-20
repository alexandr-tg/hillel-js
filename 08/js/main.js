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
var capCharStr = iLearnJS.charAt(0).toUpperCase() + iLearnJS.slice(1);
console.log(capCharStr);