var surface = document.getElementById("drawingSurface");
var ctx = surface.getContext("2d");

// 1. Ask the user for a number of petals to draw >=1. Don't give up.
var numPetals = Number(window.prompt("How many petals should I draw? I don't know how to draw less than one petal."));

while (isNaN(numPetals) || numPetals < 1) {
    numPetals = Number(window.prompt("How many petals should I draw? I don't know how to draw less than one petal."));
}

ctx.translate(surface.width / 2, surface.height / 2);
var petalLength = 300;

var i = 0;
for (i; i < numPetals; i = i + 1) {
    ctx.save();
    ctx.rotate(i * 2 * Math.PI / numPetals);
    // draw boxes above the petal longitudinal axis
    ctx.fillRect(petalLength / 2 - 5, -15, 10, 10);  // top
    ctx.fillRect(petalLength / 2 - 5, -35, 10, 10);
    ctx.fillRect(petalLength / 2 - 5, 5, 10, 10);  // bottom
    ctx.fillRect(petalLength / 2 - 5, 25, 10, 10);
    // draw petal outer edge and longitudinal axis
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.lineTo(petalLength, 0);
    ctx.lineTo(petalLength / 2, 40);
    ctx.lineTo(0, 0);
    ctx.lineTo(petalLength, 0);
    ctx.lineTo(petalLength / 2, -40);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
}


















//ctx.save();
//// draw boxes above the petal longitudinal axis
//ctx.fillRect(petalLength / 2 - 5, -15, 10, 10);  // top
//ctx.fillRect(petalLength / 2 - 5, -35, 10, 10);
//ctx.fillRect(petalLength / 2 - 5, 5, 10, 10);  // bottom
//ctx.fillRect(petalLength / 2 - 5, 25, 10, 10);
//
//// draw petal outer edge and longitudinal axis
//ctx.beginPath();
//ctx.lineTo(0, 0);
//ctx.lineTo(petalLength, 0);
//ctx.lineTo(petalLength / 2, 40);
//ctx.lineTo(0, 0);
//ctx.lineTo(petalLength, 0);
//ctx.lineTo(petalLength / 2, -40);
//ctx.lineTo(0, 0);
//
//ctx.stroke();
//ctx.restore();
//
//
//
//ctx.rotate(2 * Math.PI / numPetals);
//ctx.save();
//// draw boxes above the petal longitudinal axis
//ctx.fillRect(petalLength / 2 - 5, -15, 10, 10);  // top
//ctx.fillRect(petalLength / 2 - 5, -35, 10, 10);
//ctx.fillRect(petalLength / 2 - 5, 5, 10, 10);  // bottom
//ctx.fillRect(petalLength / 2 - 5, 25, 10, 10);
//
//// draw petal outer edge and longitudinal axis
//ctx.beginPath();
//ctx.lineTo(0, 0);
//ctx.lineTo(petalLength, 0);
//ctx.lineTo(petalLength / 2, 40);
//ctx.lineTo(0, 0);
//ctx.lineTo(petalLength, 0);
//ctx.lineTo(petalLength / 2, -40);
//ctx.lineTo(0, 0);
//
//ctx.stroke();
//ctx.restore();



