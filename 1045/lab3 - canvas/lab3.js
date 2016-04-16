//Draw the Starship Enterprise

//Get the render context.
var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

//Draw the Primary Hull (also known as the saucer).
ctx1.beginPath();
ctx1.lineTo(175, 120); //This is the ENE corner of the primary hull.
ctx1.lineTo(175, 140); //Draw clockwise.
ctx1.lineTo(140, 160);
ctx1.lineTo(70, 160);
ctx1.lineTo(35, 140);
ctx1.lineTo(35, 120);
ctx1.lineTo(70, 100);
ctx1.lineTo(140, 100);
ctx1.closePath();
ctx1.stroke();

//Draw the Secondary Hull.
ctx1.fillRect(175, 200, 100, 25); //Draw the secondary hull using a rectangle.

//Draw the Propulsion Unit.
ctx1.fillRect(250, 145, 80, 20); //Draw the propulsion unit using a rectangle.

//Draw the strut connecting the Primary Hull to the Secondary Hull.
ctx1.beginPath(); //Draw the westernmost strut edge. Draw from the top down.
ctx1.lineTo(140, 160);
ctx1.lineTo(175, 200);
ctx1.stroke();
ctx1.beginPath(); //Draw the easternmost strut edge. Draw from the top down.
ctx1.lineTo(157.5, 150);
ctx1.lineTo(190, 200);
ctx1.stroke();

//Draw the strut connecting the Secondary Hull to the Propulsion Unit.
ctx1.beginPath(); //Draw the westernmost strut edge. Draw from the top down.
ctx1.lineTo(250, 165);
ctx1.lineTo(225, 200);
ctx1.stroke();
ctx1.beginPath(); //Draw the easternmost strut edge. Draw from the top down.
ctx1.lineTo(290, 165);
ctx1.lineTo(265, 200);
ctx1.stroke();

//Draw the Flower

//Get the render context.
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var petall = 100;//Define petal length as a variable with a constant value.
var theta = 33; //Define the angle (degr) btwn longitudinal and petal top edge
var radius = petall / (3 * Math.cos(theta * Math.PI / 180)); //r : Flower Cntr.

//Draw the flower Centre.
ctx2.save();
ctx2.translate(canvas2.width / 2, canvas2.height / 2); //Move the origin.
ctx2.beginPath();
ctx2.arc(0, 0, radius / 3, 0, 2 * Math.PI); //arc(x, y, r, arc ini., arc fin.)
ctx2.stroke();
ctx2.fill();
ctx2.restore();

//Draw the Petals of the flower.
ctx2.translate(200, 200);
ctx2.beginPath(); // Draw the horizontal petal.
ctx2.lineTo(0, 0);
ctx2.lineTo(petall, 0);
ctx2.lineTo(2 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(1 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(0, 0);
ctx2.lineTo(1 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(2 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(petall, 0);
ctx2.stroke();

ctx2.save();
ctx2.rotate(2 * Math.PI / 5); // Draw the 5 o'clock petal.
ctx2.beginPath();
ctx2.lineTo(0, 0);
ctx2.lineTo(petall, 0);
ctx2.lineTo(2 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(1 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(0, 0);
ctx2.lineTo(1 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(2 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(petall, 0);
ctx2.stroke();
ctx2.restore();

ctx2.save();
ctx2.rotate(4 * Math.PI / 5); // Draw the 7 o'clock petal.
ctx2.beginPath();
ctx2.lineTo(0, 0);
ctx2.lineTo(petall, 0);
ctx2.lineTo(2 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(1 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(0, 0);
ctx2.lineTo(1 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(2 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(petall, 0);
ctx2.stroke();
ctx2.restore();

ctx2.save();
ctx2.rotate(6 * Math.PI / 5); // Draw the 10 o'clock petal.
ctx2.beginPath();
ctx2.lineTo(0, 0);
ctx2.lineTo(petall, 0);
ctx2.lineTo(2 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(1 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(0, 0);
ctx2.lineTo(1 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(2 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(petall, 0);
ctx2.stroke();
ctx2.restore();

ctx2.save();
ctx2.rotate(8 * Math.PI / 5); // Draw the 1 o'clock petal.
ctx2.beginPath();
ctx2.lineTo(0, 0);
ctx2.lineTo(petall, 0);
ctx2.lineTo(2 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(1 / 3 * petall, -petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(0, 0);
ctx2.lineTo(1 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(2 / 3 * petall, petall / 3 * Math.tan(theta * Math.PI / 180));
ctx2.lineTo(petall, 0);
ctx2.stroke();
ctx2.restore();

//Draw an Octagon.

//Get the context.
var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");
var cornerdist = 95; //The corner dstance from centre (in pixels).

//ctx3.save();
ctx3.translate(canvas3.width / 2, canvas3.height / 2);
ctx3.beginPath();
ctx3.lineTo(cornerdist, 0);

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.save();
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.rotate(Math.PI / 4);
ctx3.lineTo(cornerdist, 0);
ctx3.restore();

ctx3.closePath();

ctx3.stroke();