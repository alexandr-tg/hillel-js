const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}

console.log(concatCharsByIndex(secret));



function concatCharsByIndex(obj) {
    var result = [];
    for (key in obj) {
        obj[key].forEach(value => result[value] = key);
    }
    return result.join('');
}