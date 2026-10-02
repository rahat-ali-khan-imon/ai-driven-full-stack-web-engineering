import './M07.03UserCard.css'                       //

type User = {
  id: number
  name: string
  username: string
  email: string
}

type UserCardProps = {
  user: User
}

export default function UserCard({user}: UserCardProps) {
  return (
    <div className="user">
      <h3>Name: {user.name}</h3>

      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}