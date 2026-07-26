// Problem 8: Count Words in a Sentence

function wordsCount(str) {
    let strSplitArray = str.split(' ');
    return strSplitArray.length;
}


let result = 'Programming is fun';
console.log('Words count:', wordsCount(result));

console.log('Words count:', wordsCount('Hi, Hello, Welcome to JavaScript'));