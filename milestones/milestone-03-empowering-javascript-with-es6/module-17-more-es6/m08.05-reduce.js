const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, element, index, array) => {
    console.log('Accumulator: ', accumulator, 'Element: ', element, 'Index: ', index, 'Array: ', array);

    return accumulator + element;

}, 0);

console.log(sum);