// Problem 15: Return All Even Numbers, Then Their Sum

function getEvenNumbers(arr) {
    let evenNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

function getSum(arr) {
    let sum = 0;
    for(let number of arr) {
        sum += number;
    }
    return sum;
}

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];
let evenNumbers = getEvenNumbers(arr)
console.log('Even numbers:', evenNumbers);

let sum = getSum(evenNumbers);
console.log('Sum:', sum);