function TodoTask8({task, time}: {
    task: string;
    time?: string
}) {
    return <li>Do this Word: {task} -- Time: {time || 'null'}</li>
}

export default TodoTask8;