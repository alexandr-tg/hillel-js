// First Task
var numbers = [4, 2, 10, 15, 22, -5, -11, -1, 0, -9];

var result = numbers.filter(value => value > 0).map(value => Math.sqrt(value));
console.log(result);

//Second Task
var count = 0;

numbers.reduce(function (acc, cur, index) {
    if(acc > 10 && count === 0) count = index;
    return acc + cur;
});

console.log(count);