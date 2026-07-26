// Problem 07: Check if a string is a palindrome


function isPalindrome(str) {
    let reverse = '';

    for(let i = 0; i < str.length; i++) {
        reverse = str[i] + reverse;
    }

    return (str === reverse) ? true : false;
}

 
let result = isPalindrome('madam');
console.log('Palindrome:', result);

console.log('Palindrome:', isPalindrome('programming'));
console.log();


let ans = (isPalindrome('Hero') == true) ? 'Palindrome' : 'Not Palindrome';
console.log(ans);