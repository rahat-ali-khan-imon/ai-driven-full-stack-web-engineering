"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDistanceSummary = (distances) => {
    const total = distances.reduce((sum, distance) => sum + distance, 0);
    const average = total / distances.length;
    return {
        total,
        average: isNaN(average) ? 0 : average
    };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
//# sourceMappingURL=m05.02-problem7.js.map