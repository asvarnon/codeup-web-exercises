"use strict";
//(function(){

function determineShapes() {
    var shapes = ['square', 'rectangle', 'circle', 'triangle'];
    // loop through the array and log the values
    for (var i = 0; i < shapes.length; i++) {
        console.log('The shape at index ' + i + ' is: ' + shapes[i]);
    }
}


function codeUp() {
    var sentence = "";
    var words = ["Coding", "is", "fun", "at", "CodeUp!"];
    words.forEach(function (word, i, words) {
        sentence += word;
        if (i < words.length - 1) {
            sentence += " ";
        } else {
            sentence += "!";
        }
    });
    console.log(sentence);
}

















//})();