// Generic Array

// function getValue<T>(items: T[]): T {
//     return items[0];
// }

function getValue<T>(items: T[]): T | undefined {
    return items[0];
}

const numberArray = getValue([10, 20, 30]);
const stringArray = getValue(["Alisa", "Rahim", "Karim"]);
const emptyArray = getValue([]);

console.log(numberArray);
console.log(stringArray);
console.log(emptyArray);