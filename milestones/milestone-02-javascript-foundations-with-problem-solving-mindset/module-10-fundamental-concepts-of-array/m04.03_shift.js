const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.shift();
console.log(numbers);


const firstOut = numbers.shift();
const secondOut = numbers.shift();

console.log(firstOut, secondOut);