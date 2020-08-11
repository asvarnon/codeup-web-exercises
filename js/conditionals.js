"use strict";
(funciton(){

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName == 'red') {
        return colorName + " is the same color as an apple!";
    } else if (colorName == 'orange') {
        return colorName + " is the same color as an orange!";
    } else if (colorName == 'yellow') {
        return colorName + " is the same color as an banana!";
    } else if (colorName == 'green') {
        return colorName + " is the same color as a pear!";
    } else if (colorName == 'blue') {
        return colorName + " is the same color as the sky!";
    } else {
        return "I do not know anything about " + colorName + ".";
    }
};

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(colorName) {
//     switch (colorName) {
//         case 'red':
//             return colorName + " is the same color as an apple!";
//             break;
//         case 'orange':
//             return colorName + " is the same color as an orange!";
//             break;
//         case 'yellow':
//             return colorName + " is the same color as an banana!";
//             break;
//         case 'green':
//             return colorName + " is the same color as a pear!";
//             break;
//         case 'blue':
//             return colorName + " is the same color as the sky!";
//             break;
//         default:
//             return "I do not know anything about " + colorName + ".";
//             break;
//     }
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Choose a color.");
alert(analyzeColor(userColor.toLowerCase()));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function discountPriceCalculator(percent, total) {
    var discountPercentage = parseFloat(percent).toFixed(2);
    var totalPrice = parseFloat(total).toFixed(2);
    var discountedPrice = total - (total * (percent / 100));
    return discountedPrice;
    console.log(discountedPrice)
}
function calculateTotal(luckyNumber, totalPrice) {
    if (luckyNumber === 1) {
        return "Your lucky number is " + luckyNumber + " and your total is: $" + discountPriceCalculator(10, totalPrice).toFixed(2);
    } else if (luckyNumber === 2) {
        return "Your lucky number is " + luckyNumber + " and your total is: $" + discountPriceCalculator(25, totalPrice).toFixed(2);
    } else if (luckyNumber === 3) {
        return "Your lucky number is " + luckyNumber + " and your total is: $" + discountPriceCalculator(35, totalPrice).toFixed(2);
    } else if (luckyNumber === 4) {
        return "Your lucky number is " + luckyNumber + " and your total is: $" + discountPriceCalculator(50, totalPrice).toFixed(2);
    } else if (luckyNumber === 5) {
        return "Your lucky number is " + luckyNumber + " and your total is: $" + discountPriceCalculator(100, totalPrice).toFixed(2);
    } else {
        return "This is not a valid number.";
    }
};

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 var billTotal = parseFloat(prompt("What was your total bill amount?"));
 alert(calculateTotal(luckyNumber, billTotal));



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isEvenOrOdd(input) {
    if (input % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function isPositiveOrNegative(input) {
    if (input >= 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}
function chosenNumber() {
    var confirmation = confirm("Would you like to choose a number?");
    if (confirmation == false) {
        return "You have not chosen a number.";
    }
    var userNumber = parseInt(prompt("What number do you choose?"));
    alert("Your number is " + isEvenOrOdd(userNumber));
    alert("Your number plus 100 is " + (userNumber + 100));
    alert("Your number is " + isPositiveOrNegative(userNumber));
}


})();