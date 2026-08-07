function calculator(a, b, callback) {
    let sum = a + b;

    callback(sum);
}

function displayResult(result) {
    console.log(result);
}

calculator(5, 10, displayResult);
calculator(50, 10, displayResult);