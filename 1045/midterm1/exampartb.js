var content = document.getElementById("content");
content.innerHTML = "asdf";



// 1. Ask the user for the size (small/medium/large). Don't give up.
var size = Number(window.prompt("Enter the."));
while (isNaN(size) || size !== "small") {
    size = Number(window.prompt("Enter a number between 1 and 10."));
}

