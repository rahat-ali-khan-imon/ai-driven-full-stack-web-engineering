// Problem 6: Count Vowels in a String

function countVowels(str) {
    let vowels = 'aeiou';
    let cnt = 0;

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            cnt++;
        }
    }

    return cnt;
}


let result = countVowels('Programming Hero');
console.log('Count vowels:', result);

console.log('Count vowels:', countVowels('I am robot'));