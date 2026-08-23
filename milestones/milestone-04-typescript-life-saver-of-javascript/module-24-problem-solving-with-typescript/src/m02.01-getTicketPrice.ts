// Problem DOC: https://docs.google.com/document/d/155qohMY5ODUyoDs1SVBLH6ZP3Cw7Buges1nPlBuvOKM/edit?tab=t.0

const getTicketPrice = (age: number): number => {
    if(age < 5) {
        return 0;
    } else if(age <= 12) {
        return 100;
    } else if(age <= 59) {
        return 200;
    } else {
        return 120;
    }
};

console.log(getTicketPrice(3));   // 0
console.log(getTicketPrice(10));  // 100
console.log(getTicketPrice(25));  // 200
console.log(getTicketPrice(65));  // 120