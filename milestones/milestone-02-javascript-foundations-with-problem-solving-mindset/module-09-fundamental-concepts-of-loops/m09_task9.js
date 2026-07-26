/* Task 9 — Sum of Even Numbers
Write a for loop that calculates the sum of all even numbers from 2 to 50.
*/

function sumEvenNumbers() {
    let evenNumbers = [];

    for(let i = 2; i <= 50; i++) {
        if(i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    let sum = 0;
    
    for(const number of evenNumbers) {
        sum += number;
    }

    return sum;
}


let result = sumEvenNumbers();
console.log('Sum of all even numbers:', result);