/* Problem 04: FizzBuzz (1 to N)
Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, 
print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.
*/

function fizzBuzz(number) {
    for(let i = 1; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            return 'FizzBuzz';
        } else if(i % 3 === 0) {
            return 'Fizz';
        } else if(i % 5 === 0) {
            return 'Buzz';
        } else {
            return 1;
        }
    }
}


let result = fizzBuzz(15);
console.log(result);

console.log(fizzBuzz(10));
console.log(fizzBuzz(20));