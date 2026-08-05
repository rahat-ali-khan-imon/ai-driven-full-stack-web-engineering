const user = {
    name: "Alice",
    age: 23,
    array: [10, 20, 30, 40, 50],
    objects: {
        name: "Programming Here",
        id: 194
    }
}

// Access property: Dot notation and Bracket notation 
console.log(user.name);
console.log(user.age);
console.log(user.array);
console.log();


const key = 'objects';
console.log(user.key);              // error