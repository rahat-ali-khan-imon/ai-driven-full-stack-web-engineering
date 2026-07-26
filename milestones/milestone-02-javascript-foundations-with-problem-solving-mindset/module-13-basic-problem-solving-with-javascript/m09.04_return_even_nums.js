// Problem 15: Return All Even Numbers, Then Their Sum

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];
let evenNumbers = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}


let sum = 0;

for(let key of evenNumbers) {
    sum += key;
}


console.log('Even numbers:', evenNumbers);
console.log('Sum of even numbers:', sum);