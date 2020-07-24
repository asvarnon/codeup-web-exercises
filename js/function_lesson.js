"use strict";
(function(){

    /**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello(name) {
//     return ("Hello " + name + ", nice to meet you.");
// }


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// function sayHello(name) {
//     return ("Hello " + name + ", nice to meet you.");
// }
// var helloMessage = sayHello("Austin");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

function sayHello(name) {
    return ("Hello " + name + ", nice to meet you.");
}
var myName = "Austin";
var helloMessage = sayHello(myName);
console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(input) {
    if (input === 2) {
        return true;
    } else {
        return false;
    }
};


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip(a, b) {
//    var tipConversion = parseInt(a) /100;
//    return tipConversion * b;
// };

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


function conversion() {
    var billTotal = parseFloat(prompt("What was the price of the meal?"));
    var tip = parseFloat(prompt("How much percentage would you like to tip?"));
    var tipConversion = parseInt(tip) /100;
    calculateTip(tipConversion, billTotal);
}
function calculateTip(tip, billTotal) {
    return alert("Your tip amount is: $" + (tip * billTotal).toFixed(2));
};


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(originalPrice, discountPercent) {
//     var originalPrice = parseFloat(prompt("What was the original price?"));
//         console.log("OPrice", originalPrice);
//     var discountPercent = parseFloat(prompt("What is the discount percent?"));
//         console.log("DPercent",discountPercent);
//     var discountedPrice = originalPrice - (originalPrice * (discountPercent / 100));
//         console.log("DPrice",discountedPrice);
//     if (originalPrice >= 50) {
//         return alert("Discount Applied, your total cost is: $" + discountedPrice.toFixed(2));
//     } else {
//         return alert("You are not eligible for this discount.")
//     }
// };
function discountConversion() {
    var originalPrice = parseFloat(prompt("What was the original price?"));
    console.log("OPrice", originalPrice);
    var discountPercent = parseFloat(prompt("What is the discount percent?"));
    console.log("DPercent",discountPercent);
    var discountedPrice = originalPrice - (originalPrice * (discountPercent / 100));
    console.log("DPrice",discountedPrice);
    applyDiscount(originalPrice, discountedPrice);
}
function applyDiscount(originalPrice, discountedPrice) {
    if (originalPrice >= 50) {
        return alert("Discount Applied, your total cost is: $" + discountedPrice.toFixed(2));
    } else {
        return alert("You are not eligible for this discount.")
    }
}

})();