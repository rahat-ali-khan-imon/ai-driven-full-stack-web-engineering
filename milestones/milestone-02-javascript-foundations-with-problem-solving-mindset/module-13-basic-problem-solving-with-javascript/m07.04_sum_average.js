// Problem 11: Sum and Average of an Array

function sumAverage(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg.toFixed(3);                             // return string
}

let arr = [10, 20, 30, 40, 50];
console.log('sumAverage:', sumAverage(arr));

console.log('sumAverage:', sumAverage([50, 100, 50]));