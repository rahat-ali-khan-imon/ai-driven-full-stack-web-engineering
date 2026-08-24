"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTicketConfirmation = (ticket) => {
    return `${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time}.`;
};
console.log(formatTicketConfirmation({
    name: "Nabila",
    movie: "Interstellar",
    time: "9:15 PM"
}));
console.log(formatTicketConfirmation({
    name: "Jamal",
    movie: "Inception",
    time: "6:00 PM"
}));
//# sourceMappingURL=m02.01-problem2.js.map