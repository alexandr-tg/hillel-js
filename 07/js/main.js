// First Task
var numbers = [-5, 4, 2, 10, 15, 22, -5, -11, -1, 0, -9];

var result = numbers.filter(value => value > 0).map(value => Math.sqrt(value));
console.log(result);