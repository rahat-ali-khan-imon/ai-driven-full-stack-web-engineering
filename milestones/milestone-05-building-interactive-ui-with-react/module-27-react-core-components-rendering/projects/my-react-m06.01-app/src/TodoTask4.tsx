type TodoPropsType = {
    task: string
    time: string
}

function TodoTask4({task}: TodoPropsType) {
    return <li>Do this Word: {task}</li>
}

export default TodoTask4;