type TodoPropsType = {
    task: string
}

function TodoTask2(props: TodoPropsType) {
    console.log(props);

    return <li>Do this Word: {props.task}</li>
}

export default TodoTask2;