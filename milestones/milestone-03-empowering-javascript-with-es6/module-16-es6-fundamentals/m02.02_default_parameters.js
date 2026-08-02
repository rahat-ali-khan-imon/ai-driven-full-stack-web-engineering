function greet(name = 'Guest') {
    return `Hello, ${name}`;
}

console.log(greet('Alice'));
console.log(greet());
console.log(greet('Programming'));