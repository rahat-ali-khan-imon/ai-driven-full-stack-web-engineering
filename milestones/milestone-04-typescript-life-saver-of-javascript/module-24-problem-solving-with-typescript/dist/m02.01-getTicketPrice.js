"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age <= 12) {
        return 100;
    }
    else if (age <= 59) {
        return 200;
    }
    else {
        return 120;
    }
};
console.log(getTicketPrice(3)); // 0
console.log(getTicketPrice(10)); // 100
console.log(getTicketPrice(25)); // 200
console.log(getTicketPrice(65)); // 120
//# sourceMappingURL=m02.01-getTicketPrice.js.map