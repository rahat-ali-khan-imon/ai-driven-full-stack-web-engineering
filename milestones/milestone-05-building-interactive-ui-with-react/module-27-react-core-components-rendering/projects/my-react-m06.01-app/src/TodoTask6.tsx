type TodoPropsType = {
    task: string
    time: string
}

function TodoTask6({task, time}: TodoPropsType) {
    return <li>Do this Word: {task} -- Time: {time}</li>
}

export default TodoTask6;