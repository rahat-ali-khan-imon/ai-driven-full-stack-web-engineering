// export default function Book({name}: {name: string}) {
//     return <li>Book name: {name}</li>
// }

interface BookProps {
    name: string;
}

export default function Book({name}: BookProps) {
    return <li>Book name: {name}</li>
}