interface TaskPropsType {
    name: string,
    isDone: boolean
}

export default function Task11({name, isDone}: TaskPropsType) {
    if(isDone) {
        return <li>Completed: {name}</li>
    }
    
    return <li>Pending: {name}</li>
}