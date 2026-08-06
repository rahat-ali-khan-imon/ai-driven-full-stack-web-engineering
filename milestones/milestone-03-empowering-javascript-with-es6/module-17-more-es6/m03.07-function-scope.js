// Function scope
// var maintain function only
// let and const maintain block and function scope both

function add(a, b) {
    var sum = a + b;                            // var
    return sum;
}

console.log(sum);

console.log(add(10, 15));