var array1 = ['a', 'b', 'c'];
var array2 = [1, 2, 3];

var result1 = addElementsToEndArray(array1, array2);
var result2 = addElementsToBeginningOfArray(array2, [3,4,5]);

var array3 = ['js', 'css', 'jq'];
var firstElement = array3[0];
var lastElement = array3[array3.length-1];

document.write(`<div>${result1}</div><div>${result2}</div> <br> <div>${firstElement}</div><div>${lastElement}</div>`)

var array4 = [1,2,3,4,5];
var newElement = array4.slice(0,3);



function addElementsToEndArray(array, elements){
    var result = array.slice();
    for(var i = 0; i < elements.length; i++){
        result.push(elements[i]);
    }
    return result;
}

function addElementsToBeginningOfArray(array, elements){
    var result = array.slice();
    for(var i = 0; i < elements.length; i++){
        result.unshift(elements[i]);
    }
    return result;
}