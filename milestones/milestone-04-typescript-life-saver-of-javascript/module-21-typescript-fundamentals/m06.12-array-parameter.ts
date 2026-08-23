// Array as Function Input

const getTotal = (numbers: number[]): number => {
    let total = 0;

    for(const number of numbers) {
        total += number;
    }

    return total;
}

const result8 = getTotal([10, 20, 30]);
console.log(result8);

console.log(getTotal([1, 2, 3, 4, 5]));