//(function (){
"use strict";

var planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];

/**
 * TODO:
 * Read each console log below, and write some javascript code to perform
 * the step that it describes
 */

console.log('Adding "The Sun" to the beginning of the planets array.');
planets.unshift("The Sun");
console.log("Q1" ,planets);

console.log('Adding "Pluto" to the end of the planets array.');
planets.push("Pluto");
console.log("Q2" ,planets);

console.log('Removing "The Sun" from the beginning of the planets array.');
planets.shift();
console.log("Q3" ,planets);

console.log('Removing "Pluto" from the end of the planets array.');
planets.pop();
console.log("Q4" ,planets);

console.log('Finding and logging the index of "Earth" in the planets array.');
console.log("Q5. Idex of Earth is: ", planets.indexOf("Earth"));

console.log("Reversing the order of the planets array.");
planets.reverse();
console.log("Q6" ,planets);

console.log("Sorting the planets array.");
planets.sort();
console.log("Q7" ,planets);

















//})();