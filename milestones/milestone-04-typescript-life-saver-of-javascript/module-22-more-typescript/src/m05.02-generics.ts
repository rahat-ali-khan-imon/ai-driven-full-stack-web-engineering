// Basic Generic Function

function getValue<T>(value: T): T {
    return value;
}

const numberValue = getValue<number>(100);
const stringValue = getValue<string>("Hello");
const booleanValue = getValue<boolean>(true);

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