"use strict";
// Generic Array
Object.defineProperty(exports, "__esModule", { value: true });
// function getValue<T>(items: T[]): T {
//     return items[0];
// }
function getValue(items) {
    return items[0];
}
const numberArray = getValue([10, 20, 30]);
const stringArray = getValue(["Alisa", "Rahim", "Karim"]);
const emptyArray = getValue([]);
console.log(numberArray);
console.log(stringArray);
console.log(emptyArray);
//# sourceMappingURL=m05.03-generics.js.map