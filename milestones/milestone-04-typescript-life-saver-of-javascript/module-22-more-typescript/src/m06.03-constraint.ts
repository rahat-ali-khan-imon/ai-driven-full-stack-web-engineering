function getLength<T extends {length: number}>(value: T): number {
    return value.length;
}

const result1 = getLength("Hello");
const result2 = getLength([10, 20, 30]);
// const result3 = getLength(100);          // error

console.log(result1);
console.log(result2);
// console.log(result3);