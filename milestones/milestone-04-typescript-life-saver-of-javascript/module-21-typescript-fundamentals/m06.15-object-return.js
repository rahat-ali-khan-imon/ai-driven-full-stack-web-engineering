"use strict";
// Function Returning an Object
const createUser = (name, age) => {
    return {
        name,
        age
    };
};
const user = createUser('Jamal', 23);
console.log(user);
