// Real-world Example: User Status

type UserStatus = "active" | "inactive" | "blocked";

type User = {
    name: string;
    age: number;
    status: UserStatus;                         //
};

const user3: User = {
    name: "Alisa",
    age: 22,
    status: "active"
};

const user4: User = {
    name: "Jamal",
    age: 22,
    // status: "deleted"            // Error
    status: 'blocked'
};

console.log(user3);
console.log(user4);