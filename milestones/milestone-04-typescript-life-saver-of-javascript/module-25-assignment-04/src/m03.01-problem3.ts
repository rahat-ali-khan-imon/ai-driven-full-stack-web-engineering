const calculateWeeklyTotal = (expenses: number[]): number => {
    return expenses.reduce((total, expense) => total + expense, 0);
};

console.log(calculateWeeklyTotal([200, 450, 100])); // 750
console.log(calculateWeeklyTotal([1000, 250]));     // 1250
console.log(calculateWeeklyTotal([])); 
console.log();

// calculateWeeklyTotal("expenses");         // TypeScript error
// calculateWeeklyTotal(null);              // TypeScript error
// calculateWeeklyTotal([100, "50"]);      // TypeScript error