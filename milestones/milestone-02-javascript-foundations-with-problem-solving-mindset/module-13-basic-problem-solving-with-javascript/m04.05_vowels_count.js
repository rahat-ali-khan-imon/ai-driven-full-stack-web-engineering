// Problem 6: Count Vowels in a String

let str = 'Programming Hero';
let vowels = 'aeiou';
let cnt = 0;

for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    if(vowels.includes(letter)) {
        cnt++;
    }
}


console.log('Count vowels:', cnt);