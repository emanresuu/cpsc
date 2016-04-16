var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lightArray = [0, 0, 0, 0];

function setup() {
   "use strict";
   ctx.translate(0, 100);
   runLights(lightArray);
}

function lightOneAndFour() {
   "use strict";
   lightArray[0] = 1;
   lightArray[3] = 1;
   runLights();
}

function reverseLightOneAndTwo() {
   "use strict";
   var elementOne;
   var elementTwo;
   elementOne = Number(lightArray.slice(0, 1));
   elementTwo = Number(lightArray.slice(1, 2));
   lightArray[1] = elementOne;
   lightArray[0] = elementTwo;
   alert(elementOne);
   runLights();
}

function runLights() {
   "use strict";
   turnOffLights();
   lightOne(lightArray);
   lightTwo(lightArray);
   lightThree(lightArray);
   lightFour(lightArray);
}



function turnOffLights() {
   "use strict";
      ctx.save();
      ctx.translate(25, 0);
      ctx.clearRect(0, -25, 80, 80);
      ctx.restore();
}        



function lightOne(lightArray) {
   "use strict";
   if (lightArray[0] === 1) {
      // light one
      ctx.save();
      ctx.translate(25, 0);
      ctx.beginPath();
      ctx.fillstyle = "orange";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
   } else {
      // light one
      ctx.save();
      ctx.translate(25, 0);
      ctx.beginPath();
      // ctx.fillstyle = "orange";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      // ctx.fill();
      ctx.restore();
   }
}


function lightTwo(lightArray) {
   "use strict";
   if (lightArray[1] === 1) {
      // light two
      ctx.save();
      ctx.translate(125, 0);
      ctx.beginPath();
      ctx.fillstyle = "blue";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
   } else {
      // light two
      ctx.save();
      ctx.translate(125, 0);
      ctx.beginPath();
      // ctx.fillstyle = "blue";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      // ctx.fill();
      ctx.restore();
   }
}

function lightThree(lightArray) {
   "use strict";
   if (lightArray[2] === 1) {
      // light three
      ctx.save();
      ctx.translate(225, 0);
      ctx.beginPath();
      ctx.fillstyle = "pink";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
   } else {
      // light three
      ctx.save();
      ctx.translate(225, 0);
      ctx.beginPath();
      // ctx.fillstyle = "pink";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      // ctx.fill();
      ctx.restore();
   }
}
function lightFour(lightArray) {
   "use strict";
   if (lightArray[3] === 1) {
      // light four
      ctx.save();
      ctx.translate(325, 0);
      ctx.beginPath();
      ctx.fillstyle = "blue";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      ctx.fill();
      ctx.restore();
   } else {
      // light four
      ctx.save();
      ctx.translate(325, 0);
      ctx.beginPath();
      // ctx.fillstyle = "green";
      ctx.lineTo(0, -40);
      ctx.lineTo(80, -40);
      ctx.lineTo(80, 40);
      ctx.lineTo(0, 40);
      ctx.lineTo(0, -40);
      ctx.stroke();
      // ctx.fill();
      ctx.restore();
   }
}
function reset() {
   "use strict";
   lightArray = [0, 0, 0, 0];
   runLights();
}
