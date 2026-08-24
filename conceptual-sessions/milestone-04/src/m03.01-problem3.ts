const calculateWeeklySteps = (steps: number[]): number => {
    const total: number = steps.reduce((sum, step) => sum + step, 0);
    return total;
};

console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));


/* ##> Empty Array কী হবে?

এটা problem-এর important requirement:
    An empty array should return 0.

Input:
    []

Expected:
    0


reduce()-এ initial value 0 দিলে এটা naturally handle হয়ে যায়:
    steps.reduce((total, step) => total + step, 0);

Empty array হলে:
    total = 0
    কোনো step নেই
    ↓
    0

তাই আলাদাভাবে:
    if (steps.length === 0)
check করার প্রয়োজন নেই।
*/