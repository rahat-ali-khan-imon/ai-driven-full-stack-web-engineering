interface TaskPropsType {
    name: string,
    isDone: boolean
}

export default function Task10({name, isDone}: TaskPropsType) {
    if(isDone === true) {
        return <li>Completed: {name}</li>
    }
    
    return <li>Pending: {name}</li>
}