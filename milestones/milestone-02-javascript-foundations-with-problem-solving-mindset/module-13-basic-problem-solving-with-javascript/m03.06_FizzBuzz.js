/* Problem 04: FizzBuzz (1 to N)
Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, 
print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.
*/

function fizzBuzz(number) {
    let arr = [];

    for(let i = 1; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if(i % 3 === 0) {
            arr.push('Fizz');
        } else if(i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }

    return arr;
}


const result = fizzBuzz(15);
console.log(result);
console.log('\n');

console.log(fizzBuzz(10));
console.log('\n');

console.log(fizzBuzz(23));