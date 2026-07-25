// Problem 01: Check if a number is Even or Odd

// With function
function checkEvenOdd(number) {
    if(number % 2 === 0){
        return 'Even Number';
    } else {
        return 'Odd Number';
    }
}


let result = checkEvenOdd(10);
console.log(result);

console.log(checkEvenOdd(231));
console.log(checkEvenOdd(5003));
console.log(checkEvenOdd(800));