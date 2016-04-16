//PROBLEM 1
var value_1 = Math.floor(Math.random() * 5 + 1);
var value_2 = Math.floor(Math.random() * 25 + 10);

//Question 1
var question_1 = document.getElementById("question_1");
question_1.innerHTML = "Nathaniel ate " + value_1 + " cookies then ate " + value_2 + " cookies. How many cookies did he eat altogether?";

//Answer 1
var answer_1 = document.getElementById("answer_1");
answer_1.innerHTML = "He ate " + (value_1 + value_2) + " cookies altogether.";


//PROBLEM 2
var value_3 = Math.floor(Math.random() * 5 + 1);
var value_4 = Math.floor(Math.random() * 25 + 10);

//Question 2
var question_2 = document.getElementById("question_2");
question_2.innerHTML = "Nathaniel ate " + value_3 + " bananas then ate " + value_4 + " more. How many bananas did he eat altogether?";

//Answer 2
var answer_2 = document.getElementById("answer_2");
answer_2.innerHTML = "He ate " + (value_1 + value_2) + " bananas altogether.";

//PROBLEM 3
var value_5 = Math.floor(Math.random() * 4);
var value_6 = Math.floor(Math.random() * 53);

//Question 3
var question_3 = document.getElementById("question_3");
question_3.innerHTML = "Nathaniel ate " + value_5 + " worms and " + value_6 + " spiders. How many worms or spiders did he eat altogether?";

//Answer 3
var answer_3 = document.getElementById("answer_3");
answer_3.innerHTML = "He ate " + (value_5 + value_6) + " worms and spiders altogether.";

//PROBLEM 4
var value_7 = Math.floor(Math.random() * 35 + 3);
var value_8 = Math.floor(Math.random() * 24 + 8);

//Question 4
var question_4 = document.getElementById("question_4");
question_4.innerHTML = "Nathaniel ate " + value_7 + " rays of sunshine in the morning and " + value_8 + " at night. How many rays of sunshine did Nathaniel eat altogether?";

//Answer 4
var answer_4 = document.getElementById("answer_4");
answer_4.innerHTML = "He ate " + (value_7 + value_8) + " rays of sunshine altogether.";

//PROBLEM 5
var value_9 = Math.floor(Math.random() * 40 + 5);
var value_10 = Math.floor(Math.random() * 80 + 4);

//Question 5
var question_5 = document.getElementById("question_5");
question_5.innerHTML = "A spider ate " + value_9 + " flies, " + value_10 + " beetles and Nathaniel. How many things did the spider eat?";

//Answer 5
var answer_5 = document.getElementById("answer_5");
answer_5.innerHTML = "The spider ate " + (value_9 + value_10 + 1) + " things.";