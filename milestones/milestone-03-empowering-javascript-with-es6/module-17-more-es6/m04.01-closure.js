// Closure is when a function is able to remember and access it's lexical scope even when that function is executing outside it's lexical scope

function createCounter() {
    let count = 0;

    return count;
}

let counter = createCounter();
console.log(counter);