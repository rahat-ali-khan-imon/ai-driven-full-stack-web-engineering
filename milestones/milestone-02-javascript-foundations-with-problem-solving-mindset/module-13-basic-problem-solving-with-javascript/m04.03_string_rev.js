// Problem 5: Reverse a String

let str = 'programming';
let reverseWord = '';

for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    reverseWord = letter + reverseWord;
}

console.log(reverseWord);