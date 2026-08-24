"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    return expenses.reduce((total, expense) => total + expense, 0);
};
console.log(calculateWeeklyTotal([200, 450, 100])); // 750
console.log(calculateWeeklyTotal([1000, 250])); // 1250
console.log(calculateWeeklyTotal([]));
//# sourceMappingURL=m03.01-problem3.js.map