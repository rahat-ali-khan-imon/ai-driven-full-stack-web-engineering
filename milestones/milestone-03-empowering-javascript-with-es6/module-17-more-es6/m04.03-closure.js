function createCounter() {          // outer function
    let count = 0;

    return function () {            // inner function
        return count;
    };
}

let counter = createCounter();

console.log(counter());                 // ()