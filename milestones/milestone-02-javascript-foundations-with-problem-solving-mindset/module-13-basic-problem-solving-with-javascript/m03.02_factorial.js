// Problem 03: Factorial of a Number

function getFactorial(number) {
    let fact = 1;
    for(let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}


let result = getFactorial(5);
console.log('Factorial:', result);

console.log('Factorial:', getFactorial(8));
console.log('Factorial:', getFactorial(10));
console.log('Factorial:', getFactorial(7));