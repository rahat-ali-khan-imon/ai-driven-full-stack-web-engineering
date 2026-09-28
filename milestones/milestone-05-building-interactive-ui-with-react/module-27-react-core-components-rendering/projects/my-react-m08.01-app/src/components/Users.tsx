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



// export default function Users() {
//     return (
//         <div>
//             {users.map((user) => (
//                 <li>{user.name}</li>
//             ))}
//         </div>
//     )
// }

export default function Users() {
    return (
        <div>
            {users.map((user) => (
                <li>{user.name}</li>
            ))}
        </div>
    )
}