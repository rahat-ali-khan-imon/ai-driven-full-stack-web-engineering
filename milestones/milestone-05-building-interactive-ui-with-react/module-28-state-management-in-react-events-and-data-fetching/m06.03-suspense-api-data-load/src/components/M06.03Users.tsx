import { use } from "react";

type User = {
  id: number
  name: string
  username: string
  email: string
}

type UsersProps = {
  usersDataPromise: Promise<User[]>
}

function Users({usersDataPromise}: UsersProps) {
    const users = use(usersDataPromise);
    console.log(users);
    
    return (
        <>
            <h2>Users: {users.length}</h2>
        </>
    )
}

export default Users;
