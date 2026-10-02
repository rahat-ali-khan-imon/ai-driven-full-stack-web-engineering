import { use } from "react";
import UserCard from "./M07.02UserCard";

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

      {users.map((user) => 
        <UserCard user={user}></UserCard>
      )}
    </>
  )
}

export default Users;
