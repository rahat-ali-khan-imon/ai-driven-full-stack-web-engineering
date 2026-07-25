/* Task 9 — Mini Coding Challenge
Calculate the total price, discount amount, and final price for a purchase.
*/

let price = 200;
let quantity = 3;
let discount = 10; // percent
 

let totalPrice = price * quantity;
let discountAmount = (totalPrice * discount) / 100;
let finalPrice = totalPrice - discountAmount;
 

console.log("Total Price:", totalPrice);
console.log("Discount Amount:", discountAmount);
console.log("Final Price:", finalPrice);