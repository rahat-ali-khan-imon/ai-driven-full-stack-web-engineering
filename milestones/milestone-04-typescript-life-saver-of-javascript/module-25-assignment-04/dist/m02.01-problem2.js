"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatBookingConfirmation = (booking) => {
    return `${booking.name} table for ${booking.name} guests is confirmed at ${booking.time}.`;
};
console.log(formatBookingConfirmation({
    name: "Aisha",
    guests: 4,
    time: "7:00 PM"
}));
console.log(formatBookingConfirmation({
    name: "Rahim",
    guests: 2,
    time: "8:30 PM"
}));
//# sourceMappingURL=m02.01-problem2.js.map