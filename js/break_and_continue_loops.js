"use strict";
//(function (){


function numberToSkip() {
    var userInput = prompt("Choose a number between 1 and 50 that you would like to skip?");
    for (var i = 1; i <= 50; i+=2) {
        if (userInput < 0 || userInput > 50) {
            console.log("This number is not within the asked perameters.");
            break;
        }
        if (i === parseInt(userInput)) {
            console.log("Yikes! Skipping number " + userInput);
            continue;
        }
        console.log("Here is a random number: " + i);
    }

}

























//})();