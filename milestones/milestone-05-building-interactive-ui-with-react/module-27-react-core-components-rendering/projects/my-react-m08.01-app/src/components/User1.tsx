import UserCard from "./UserCard";

interface User {
    name: string;
    isLoggedIn: boolean;
}

const users: User[] = [
    {
        name: 'Alisa', isLoggedIn: true
    },
    {
        name: 'Jennie', isLoggedIn: true
    },
    {name: 'Jisoo', isLoggedIn: false},
    {name: 'Lisa', isLoggedIn: true},
    {name: 'Rose', isLoggedIn: false}
]

export default function Users1() {
    return (
        <div>
            {users.map((user) => (
                <UserCard name={user.name}/>
            ))}
        </div>
    )
}