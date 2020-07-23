"use strict";

console.log("Hello from External!");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
console.log('The user entered: ' + userInput);
var userInputLC = userInput.toLowerCase();
    if (userInputLC == "blue") {
        alert("Awesome, That is my favorite color too!");
    } else {
        alert("Thats cool, but blue is better.");
    };