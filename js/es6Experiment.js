"use strict";

// es6 syntax (including template strings)
function sayHello(name = 'Austin') {
    return `Hello, ${name}!`;
}

sayHello(); // "Hello, World!"
sayHello('codeup'); // "Hello, codeup!"


const sayHelloArrow = (name = "Austin") => {
    return `Hello, ${name}. I am Joe`;
}

// const name = "Austin";
// const person = {
//     name,
//     age: 26
// }

const person = {name: "Austin", age: 26};
const {name, age} = person;

console.log(name);
console.log(age);


