// Problem 9: Find the Largest Number in an Array

let arr = [500, 120, 20, 5010, 1440];
let largest = arr[0];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}

console.log('Largest Number:', largest);