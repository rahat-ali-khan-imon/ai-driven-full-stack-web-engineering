// Problem 07: Check if a string is a palindrome

let str = 'madam';
let reverse = '';

for(let i = 0; i < str.length; i++)  {
    reverse = str[i] + reverse;
}

if(str === reverse) {
    console.log('Palindrome');
} else {
    console.log('Not Palindrome');
}