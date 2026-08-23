"use strict";
// Default Parameters
const greet2 = (name = 'Guest') => {
    return `Hello, ${name}`;
};
console.log(greet2('Alisa'));
console.log(greet2());
