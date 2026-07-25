// Problem 02: Sum of Range of Numbers (1 to N)

function sumRange(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

const result = sumRange(10);
console.log('Sum:', result);

console.log('Sum:', sumRange(50));
console.log('Sum:', sumRange(100));