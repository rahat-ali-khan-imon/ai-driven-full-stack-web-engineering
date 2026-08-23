"use strict";
// Special types: nullable, any, unknown and never
function calculateTex(amount, taxRate) {
    return amount * taxRate;
}
const myTax = calculateTex(100, 0.15);
console.log(myTax);
// const youTax = calculateTex('200', 0.2);          // Error
