interface TaskPropsType {
    name: string,
    isDone: boolean
}

export default function Task14({name, isDone}: TaskPropsType) {

    // return isDone === true || <li>Completed: {name}</li>;

    // return isDone || <li>Completed: {name}</li>;


    // return isDone === false || <li>Hurry Up: {name}</li>;

    return !isDone || <li>Hurry Up: {name}</li>;
}