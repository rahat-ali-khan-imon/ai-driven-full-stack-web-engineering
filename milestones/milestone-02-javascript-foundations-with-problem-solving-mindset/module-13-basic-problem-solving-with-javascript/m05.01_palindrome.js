// Problem 07: Check if a string is a palindrome

let str = 'programming';
let reverse = '';

for(let i = 0; i < str.length; i++)  {
    reverse = str[i] + reverse;
}

console.log(str);
console.log(reverse);