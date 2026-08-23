// function greet(name: string): string {
//     return `Hello, ${name}`;
// }

const greet = (name: string): string => {
    return `Hello, ${name}`;
}

const result1 = greet('Alisa');
console.log(result1);

const result2: string = greet('Jennie');
console.log(result2);

console.log(greet('Alice'));
console.log();



const greet1 = (name: string) => {      // TypeScript নিজেই বুঝতে পারবে যে return type string।
    return `hello, ${name}`;
}

console.log(greet1('Jamal'));