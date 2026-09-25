"use strict";
// Basic Generic Function
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(value) {
    return value;
}
const numberValue = getValue(100);
const stringValue = getValue("Hello");
const booleanValue = getValue(true);
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);
console.log();
const numberValue1 = getValue(200);
const stringValue1 = getValue("Hi");
const booleanValue1 = getValue(false);
console.log(numberValue1);
console.log(stringValue1);
console.log(booleanValue1);
//# sourceMappingURL=m05.02-generics.js.map