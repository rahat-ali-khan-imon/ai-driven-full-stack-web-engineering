const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, element, index, array) => {
    console.log(accumulator, element, index, array);
}, 0)               // 0