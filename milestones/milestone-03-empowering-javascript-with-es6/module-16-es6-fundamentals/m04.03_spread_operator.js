let maxNumber = Math.max(100, 200, 1010, 300, 400, 500);
console.log(maxNumber);


let numbers = [10, 50, 60, 30, 20, 70];

console.log(Math.max(numbers));         // NaN
console.log(Math.max(...numbers));     // 70