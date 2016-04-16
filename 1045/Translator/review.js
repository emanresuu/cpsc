var frenchWords = ["bonjour", "oui", "non", "au rovior"];
var englishWords = ["Good Morning","yes","no","see you later"];

function setup() {
   "use strict";
    //do nothing for now
}
function translate1(){
    "use strict";
    var outputElement = document.getElementById("output");
    var inputElement = document.getElementById("word");
    var word = inputElement.value;
    
    if(word === "All Words"){
        var wordList = "";
        for(var i =0; i < frenchWords.length; i = i +1){
            wordList = wordList + frenchWords[i] + " : " +englishWords[i] + "<br>";
        }
        outputElement.innerHTML = wordList;
    } else if(frenchWords.indexOf(word.toLocaleUpperCase()) !== -1){
        var index = frenchWords.indexOf(word);
       outputElement.innerHTML = englishWords[index]; 
    } else {
        outputElement.innerHTML = "I can not translate " + word;
    }
}
    