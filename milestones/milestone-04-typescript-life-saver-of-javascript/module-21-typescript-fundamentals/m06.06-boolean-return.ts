//  Boolean Return Type

const isAdult = (age: number): boolean => {
    return age >= 18;
}

const result3 = isAdult(20);
console.log(result3);

console.log(isAdult(15));