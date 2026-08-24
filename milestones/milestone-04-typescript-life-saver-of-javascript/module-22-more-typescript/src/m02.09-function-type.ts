// Function Type Alias

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));