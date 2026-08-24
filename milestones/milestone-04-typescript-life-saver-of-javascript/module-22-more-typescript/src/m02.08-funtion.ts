// Type Alias with Function

type User = {
    name: string;
    age: number;
};

function introUser(user: User): string {
    return `My name is ${user.name}. I am ${user.age} years old.`;
}

console.log(
    introUser({
        name: 'Alisa',
        age: 23
    })
);