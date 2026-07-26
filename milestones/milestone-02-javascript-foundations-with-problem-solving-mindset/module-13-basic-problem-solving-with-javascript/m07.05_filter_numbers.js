// Problem 12: Filter Numbers Greater Than a Value

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let value = 45;

let filteredArray = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > value) {
        filteredArray.push(arr[i]);
    }
}

console.log(filteredArray);