"use strict";
/**
 * 1. Variables (Basic Types)
 * 2. Array
 * 3. Function
 * 4. Object
 * 5. Some more basic types
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Variable
const destination = 'Saint Martin';
const helicopters = 63;
// Array
const countries = ['France', 'Germany', 'Italy', 'Spain'];
// Function
function buyBook(title, price, discount) {
    return `The book ${title} cost ${price - discount}`;
}
function buyBook2(title, price, discount) {
    // return `The book ${title} cost ${price - discount}`;                     // Error
}
function buyBook3(title, price, discount) {
    if (discount == undefined) {
        discount = 0;
    }
    return `The book ${title} cost ${price - discount}`;
}
// Object
const tubeLight = {
    brand: 'Philips',
    color: 'White',
    price: 12.99,
    isAvailable: true
};
// union string | number | boolean | null
//# sourceMappingURL=m01.01-recap.js.map