// Problem 12: Filter Numbers Greater Than a Value

function getFilteredArray(arr, value) {
    let filteredArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > value) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let value = 45;
console.log(getFilteredArray(arr, value));

console.log(getFilteredArray([100, 30, 400, 40, 50, 600, 20, 100], 99));