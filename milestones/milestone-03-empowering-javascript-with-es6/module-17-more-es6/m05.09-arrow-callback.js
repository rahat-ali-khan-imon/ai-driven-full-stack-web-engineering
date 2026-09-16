// Arrow Function Callback

function calculate(a, b, callback) {
    callback(a * b);
}

calculate(10, 20, (result) => {
    console.log(result);
})