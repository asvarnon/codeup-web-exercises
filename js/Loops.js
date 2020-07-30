"use strict";
(function(){

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Lecture~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// //--------------------------While-----------------------------------
//
// var yesNo = true;
//
// while(yesNo) {
//     console.log("Ran Loop");
//     yesNo = confirm("Would you like to continue?");
// }
// console.log("Loop Finished");
//
// //---------------------------INCREMENT WHILE----------------
//
// var start = 0;
// while(start <= 10) {
//     console.log(start)
//     start++;
// }
//
// //----------------------------DO - WHILE------------------------
//
// do{
//     console.log("Ran do while loop");
// } while (confirm("Would you like to continue?"));
//
// //----------------------------DO - WHILE NUMBERS------------------------
//
// var doStart = 10;
//
// do{
//     console.log(doStart)
//     doStart--;
// } while(doStart >= 0);

//-----------------------------FOR LOOP-------------------------------------

// for (var i = 0; i <= 10; i++) {
//     console.log("i", i);
//}
//------ For loop w/ Break

// for (var i = 0; i <= 10; i++) {
//     console.log("i = ", i);
//     if (i === 5){
//         break;
//     }
// }

//--------for loop with continue
// var numberToSkip = 3;
// for (var i = 0; i <= 10; i++) {
//
//     if (i === numberToSkip){
//         continue;
//     }
//     console.log("i = ", i);
// }

//-------do while with break/continue

// while (true) {
//     var name = prompt("whats your name?");
//     if (name === "") {
//         console.log("Empty name is not valid.");
//         break;
//     }
//     console.log("Name is valid.");
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOOP EXERCISES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function showMultiplicationTable(number) {
    var multiplierStart = 1;
    do {
        console.log(number + " x " + multiplierStart + " = " + (number * multiplierStart));
        multiplierStart++;
    } while (multiplierStart <= 10);
}


function randomEvenOrOdd() {
    for (var i = 1; i <= 10; i++) {
        var random = (Math.random() * (200 - 20) + 20).toFixed(0);
        console.log("random number #" + i + ": " + random);
        // var state = (random % 2 === 0 ? "even" : "odd");   TERNARY FOR IF/ELSE
        if (random % 2 === 0) {
            console.log(random + " is Even");
        } else {
            console.log(random + " is Odd");
        }
    }
}

function increasingOutput(){
    for (var i = 1; i < 10; i++) {
        var pyramidLevel = i.toString();
        for (var y = 1; y < i; y++){
            pyramidLevel += i;
        }
        console.log(pyramidLevel);
    }
}

function decreaseByFive(){
    for (var i = 100; i > 0; i-=5) {
        console.log(i);
    }
}











})()