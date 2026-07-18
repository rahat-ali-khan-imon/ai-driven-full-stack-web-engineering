const numbers = [10, 20, 30, 40, 50];

const parts = numbers.splice(2, 2, 111, 222, 333, 444, 555);
console.log(parts);

console.log(numbers);