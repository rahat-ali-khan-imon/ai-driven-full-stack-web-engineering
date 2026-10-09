import { useEffect, useState } from "react"

export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTodos(data);
        })
    }, [])

    return (
        <div>
            <h2>Todos: {todos.length}</h2>
        </div>
    )
}