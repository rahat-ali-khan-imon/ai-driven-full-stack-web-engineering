interface TaskPropsType {
    name: string
}

export default function Task6({name}: TaskPropsType) {
    return <li>Pending: {name}</li>
}