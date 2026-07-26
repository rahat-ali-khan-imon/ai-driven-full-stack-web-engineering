// Problem 9: Find the Smallest Number in an Array

function smallestNumber(arr) {
    let smallest = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}


let arr = [500, 120, 20, 5010, 1440];
console.log('Largest Number:', smallestNumber(arr));

console.log('Largest Number:', smallestNumber([10, 20, 30, 40, 50]));