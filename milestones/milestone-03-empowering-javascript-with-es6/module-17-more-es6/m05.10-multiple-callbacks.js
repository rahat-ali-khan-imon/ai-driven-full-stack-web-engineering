// Multiple Callbacks

function operation(a, b, callback) {
    callback(a, b);
}

operation(10, 5, (x, y) => {
    console.log(x + y);
})

operation(10, 5, (x, y) => {
    console.log(x - y);
})