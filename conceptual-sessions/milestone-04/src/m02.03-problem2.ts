interface Ticket {
    name: string;
    movie: string;
    time: string;
}

const formatTicketConfirmation = (ticket: Ticket): string => {
    const { name, movie, time } = ticket;

    return `${name}'s ticket for ${movie} is confirmed at ${time}.`;
};

console.log(
    formatTicketConfirmation({
        name: "Nabila",
        movie: "Interstellar",
        time: "9:15 PM"
    })
);

console.log(
    formatTicketConfirmation({
        name: "Jamal",
        movie: "Inception",
        time: "6:00 PM"
    })
);