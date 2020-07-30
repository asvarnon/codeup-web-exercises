"use strict";
(function(){

//--------------------------While-----------------------------------

var yesNo = true;

while(yesNo) {
    console.log("Ran Loop");
    yesNo = confirm("Would you like to continue?");
}
console.log("Loop Finished");

//---------------------------INCREMENT WHILE----------------

var start = 0;
while(start <= 10) {
    console.log(start)
    start++;
}

//----------------------------DO - WHILE------------------------

do{
    console.log("Ran do while loop");
} while (confirm("Would you like to continue?"));

//----------------------------DO - WHILE NUMBERS------------------------

var doStart = 10;

do{
    console.log(doStart)
    doStart--;
} while(doStart >= 0);

























})()