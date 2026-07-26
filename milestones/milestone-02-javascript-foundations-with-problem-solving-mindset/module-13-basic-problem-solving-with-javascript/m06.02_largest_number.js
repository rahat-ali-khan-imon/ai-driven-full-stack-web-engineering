// Problem 9: Find the Largest Number in an Array

function largestNumber(arr) {
    let largest = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}


let arr = [500, 120, 20, 5010, 1440];
console.log('Largest Number:', largestNumber(arr));

console.log('Largest Number:', largestNumber([10, 20, 30, 40, 50]));