const calculateWeeklySteps = (steps: number[]): number => {
    return steps.reduce((total, step) => total + step, 0);
};

console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));