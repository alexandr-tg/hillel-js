var cylinderRadius = prompt('Input cylinder radius'),
    cylinderHeight = prompt('Input cylinder height');

alert('Обьем цилиндра с радиусом ' + cylinderRadius + ' и высотой ' + cylinderHeight + ' равен: ' +
    getCylinderVolume(cylinderRadius, cylinderHeight));

function getCylinderVolume(radius, height){
    return Math.PI * (radius * radius) * height;
}