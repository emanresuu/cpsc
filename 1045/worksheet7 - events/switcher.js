switcher.js

function switcher() {
   "use strict";
   var string = document.getElementById("txt").value;
   var stringLength = string.length;
   var i;
   var stringBuilder = "";
   for (i = 0; i < stringLength; i = i + 1) {
      stringBuilder = string.substring(i , i + 1) + stringBuilder; 
   }
   var output = document.getElementById("out");
   output.innerHTML = stringBuilder;
}


