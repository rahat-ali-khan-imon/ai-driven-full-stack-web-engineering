// Problem 5: Reverse a String

function reverseWorld(word) {
    let reverseWorld = '';

    for(let i = 0; i < word.length; i++) {
        reverseWorld = word[i] + reverseWorld;
    }

    return reverseWorld;
}


let str = 'programming';
console.log(reverseWorld(str));

console.log(reverseWorld('I am robot'));