// Multiple Parameters with Different Types

const introduce = (name: string, age: number): string => {
    return `My name is ${name} and I am ${age} years old`;
}

const result4 = introduce('Alisa', 23);
console.log(result4);