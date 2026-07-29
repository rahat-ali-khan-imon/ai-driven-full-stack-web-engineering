// 1. Combine two arrays into one new array. Log the result.

let arr1 = [10, 20, 30];
let arr2 = ['apple', 'banner'];

let result = arr1.concat(arr2);
console.log(result);
console.log();



const fruits = ["Apple", "Banana", "Mango"];
const colors = ["Red", "Green", "Blue"];

const combinedArray = fruits.concat(colors);

console.log(combinedArray);
console.log(fruits);
console.log(colors);
console.log();




const numbs = [60, 70, 80, 90, 100];
const str = ['Alice', 'Alisa'];

const combinedArr = [...numbs, ...str];
console.log(combinedArr);