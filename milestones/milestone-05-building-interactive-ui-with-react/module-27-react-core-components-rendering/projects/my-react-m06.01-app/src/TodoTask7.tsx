type TodoType = {
    task: string
    time?: string             // Optional
}

function TodoTask7({task, time}: TodoType) {
    return <li>Do this Word: {task} -- Time: {time}</li>
}

export default TodoTask7;