interface UserCardProps {
    name: string;
}

export default function UserCard({name}: UserCardProps) {
    return (
        <div className="user">
            <h3>Name: {name}</h3>
        </div>
    )
}