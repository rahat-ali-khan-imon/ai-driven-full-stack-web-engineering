interface TaskPropsType {
    name: string,
    isDone: boolean
}

export default function Task12({name, isDone}: TaskPropsType) {

    // return isDone === true ? <li>Completed: {name}</li> : <li>Pending: {name}</li>

    return isDone ? <li>Completed: {name}</li> : <li>Pending: {name}</li>
}