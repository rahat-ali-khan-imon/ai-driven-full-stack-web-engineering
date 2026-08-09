const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
    if(
        typeof movie !== 'string' ||
        typeof seats !== 'number' ||
        seats < 0 || pricePerSeat < 0
    ) {
        return 'Invalid';
    }
    return `${movie}: ${seats} seat(s), Total tk${seats * pricePerSeat}`;
};

console.log(bookTicket('Dune'));
console.log(bookTicket('Dune', 3));
console.log(bookTicket('Dune', 2, 450));
console.log(bookTicket(123, 2));
console.log(bookTicket([10, 20, 30]));
console.log(bookTicket({}));
console.log(bookTicket(undefined));
console.log(bookTicket(null));