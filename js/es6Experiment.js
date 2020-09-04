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








