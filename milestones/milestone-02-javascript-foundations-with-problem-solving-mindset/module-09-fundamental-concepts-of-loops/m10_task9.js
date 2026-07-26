function sumEvenNumbers() {
    let sum = 0;

    for (let i = 2; i <= 50; i += 2) {
        sum += i;
    }

    return sum;
}

let result = sumEvenNumbers();
console.log("Sum of all even numbers:", result);