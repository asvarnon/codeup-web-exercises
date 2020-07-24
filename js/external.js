"use strict";

var littleMermaid = 3 //prompt("How many Days did you Rent the Little Mermaid?");
var brotherBear = 5 //prompt("How many days did you rent Brother Bear?");
var hercules = 1 //prompt("How many days did you rent Hercules?");

var totalDays = littleMermaid + brotherBear + hercules;
var totalCost = 3 * totalDays;
console.log("Your total cost is: $" + totalCost.toFixed(2));



var google = 400;
var amazon = 380;
var fb = 350;

var payCheck = (400 * 6) + (380 * 4) + (350 * 10);
console.log("Your weekly paycheck is: $" + payCheck.toFixed(2));


var classIsFull = false;
var scheduleHasConflicts = false;
var canEnroll = ! classIsFull && ! scheduleHasConflicts;
console.log(canEnroll);


var itemsBought = 3;
var offerValid = true;
var isPremiumMember = true;
var canApplyOffer = offerValid || itemsBought > 2;
console.log(canApplyOffer);
