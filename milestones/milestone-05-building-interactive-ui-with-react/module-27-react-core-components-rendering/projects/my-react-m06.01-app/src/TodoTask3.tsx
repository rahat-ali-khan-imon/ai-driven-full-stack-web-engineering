type TodoPropsType = {
    task: string
    time: string                            //
}

function TodoTask3(props: TodoPropsType) {
    console.log(props);

    return <li>Do this Word: {props.task}</li>
}

export default TodoTask3;