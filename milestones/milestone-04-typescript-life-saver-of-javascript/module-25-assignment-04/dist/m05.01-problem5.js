"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;
    return {
        total,
        average
    };
};
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=m05.01-problem5.js.map