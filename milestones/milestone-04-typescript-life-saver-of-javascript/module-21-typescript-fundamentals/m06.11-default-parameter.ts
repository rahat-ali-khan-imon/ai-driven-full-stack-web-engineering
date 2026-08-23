// Default Parameters

const greet2 = (name: string = 'Guest') => {
    return `Hello, ${name}`;
}

console.log(greet2('Alisa'));
console.log(greet2());