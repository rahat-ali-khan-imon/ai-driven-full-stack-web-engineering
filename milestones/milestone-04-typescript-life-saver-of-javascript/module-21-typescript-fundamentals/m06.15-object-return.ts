// Function Returning an Object

const createUser = (name: string, age: number): {
    name: string,
    age: number
} => {
    return {
        name,
        age
    };
}

const user = createUser('Jamal', 23);
console.log(user);