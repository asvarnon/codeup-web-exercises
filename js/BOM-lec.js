// (function (){
    "use strict";

var name = "Austin";
console.log(name);
// name automatically becomes a property of the window object (window.name) in browser.

console.log(window.name);
//global variables become a property of the window.
//Any variables inside a function or IIFE, are not global variable, therefore do not become part of window object.

//ALERTS, CONFIRMS, & PROMPTS are all properties of the window object within the browser.

    // var numberOfTimesRun = 0;
    //
    // var helloInterval = setInterval(function () {
    //     numberOfTimesRun += 1;
    //     console.log("Hello " + numberOfTimesRun);
    //     if (numberOfTimesRun >= 5){
    //         //if it counts greater than 5, it clears the interval once that condition is met.
    //         clearInterval(helloInterval);
    //     }
    // }, 2000);


    setTimeout(function (){
        console.log("Hello after a while");
    }, 5000);



    //when reloading, high recommended bypassing the local reload and use location.reload(true);
    //this is essentially a hard reload and requesting a fresh copy from the server.


    //read up history and navigator objects of the BOM
    //https://developer.mozilla.org/en-US/docs/Web/API/History
    //https://developer.mozilla.org/en-US/docs/Web/API/Navigator



// })();