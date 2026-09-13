interface TaskPropsType {
    name: string,
    isDone: boolean
}

export default function Task16({name, isDone}: TaskPropsType) {
    let list;

    if(isDone) {
        list = <li>Done: {name}</li>
    } else {
        list = <li>Not Done: {name}</li>
    }

    return list;                            //
}