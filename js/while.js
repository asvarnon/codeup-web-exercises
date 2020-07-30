"use strict";

//(function () {



function multipleOfTwo(){
    var x = 2;
    while (x < 70000) {
        console.log(x);
        x *= 2;
    }
}




function conesToSell() {
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    var personBought = Math.floor(Math.random() * 5) + 1;
    console.log("I have " + allCones + " to Sell!")
    do {
        if (allCones > personBought){
            console.log(personBought + " cones sold!");
            allCones -= personBought;
        }
        if(personBought > allCones){
            console.log("Sorry, I cannot sell you " + personBought + ". I only have " + allCones +" left!");
            allCones -= allCones;
        }
        if(allCones === 0) {
            console.log("Yay! I sold all of the cones!");
            break;
        }

    } while (allCones > 0);
}































//})();

