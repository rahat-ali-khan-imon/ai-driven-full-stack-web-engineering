type TodoPropsType = {
    task: string
}

function TodoTask1(props: TodoPropsType) {
    console.log(props);

    return <li>Do this Word: {props.task}</li>
}

export default TodoTask1;