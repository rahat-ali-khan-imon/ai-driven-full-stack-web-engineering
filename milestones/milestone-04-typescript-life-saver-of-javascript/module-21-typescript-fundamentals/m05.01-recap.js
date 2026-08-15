"use strict";
const books = ['book1', 'book2', 'book3'];
const runs = [10, 20, 30, 40, 50];
const shoppingList = ['iphone', 15000]; // Fixed size
const book = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    isUsed: true
};
const book1 = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    // isUsed: true
};
const book2 = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    isUsed: true
};
// book2.name = 'Physics';                  // Error
console.log(books);
console.log(runs);
console.log(shoppingList);
console.log(book);
console.log(book1);
console.log(book2);
