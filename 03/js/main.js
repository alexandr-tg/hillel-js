console.log(isLannisterSoldier('red', 'lion'));
console.log(isLannisterSoldier('blue', 'lion'));
console.log(isLannisterSoldier('red', null));
console.log(isLannisterSoldier('blue', null));

function isLannisterSoldier(color, lion){
    return (color === 'red' && lion === null || lion === 'lion');
}