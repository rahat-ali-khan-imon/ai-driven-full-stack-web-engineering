interface TaskPropsType {
    name: string
}

export default function Task7({name}: TaskPropsType) {
    return <li>Pending: {name}</li>
}