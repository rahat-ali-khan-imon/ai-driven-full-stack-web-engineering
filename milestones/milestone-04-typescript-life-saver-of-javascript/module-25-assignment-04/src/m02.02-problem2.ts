interface Booking {
    name: string;
    guests: number;
    time: string;
}

const formatBookingConfirmation = (booking: Booking): string => {
    const {name, guests, time} = booking;

    return `${name}'s table for ${guests} guests is confirmed at ${time}.`
};

console.log(
    formatBookingConfirmation({
        name: "Aisha",
        guests: 4,
        time: "7:00 PM"
    })
);

console.log(
    formatBookingConfirmation({
        name: "Rahim",
        guests: 2,
        time: "8:30 PM"
    })
);