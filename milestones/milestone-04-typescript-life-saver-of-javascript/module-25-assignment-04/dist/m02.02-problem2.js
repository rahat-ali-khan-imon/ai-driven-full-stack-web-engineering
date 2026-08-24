"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatBookingConfirmation = (booking) => {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
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
//# sourceMappingURL=m02.02-problem2.js.map