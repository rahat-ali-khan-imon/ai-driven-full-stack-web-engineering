function useState<T>(initialValue: T): [T, (newValue: T) => void] {
    let value = initialValue;

    function setValue(newValue: T) {
        value = newValue;
    }

    return [value, setValue];
}

console.log(useState(0));
console.log(useState("0"));
console.log(useState<string>("Hello"));
console.log(useState<string>(""));
console.log(useState<number>(10));
console.log(useState<boolean>(true));

console.log();

interface User {
    email: string;
    isLoggedIn: boolean;
}


// error
// useState<User>();
// useState<User>("Hi");
// useState<User>(null);

console.log(useState<User | null>(null));

console.log(
    useState<User>({
        email: "email@gmail.com",
        isLoggedIn: false
    })
);