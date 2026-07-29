function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number' || tokensUsed < 0 || Number.isNaN(tokensUsed)) {
        return 'Invalid';
    }

    if(tokensUsed <= 500) {
        return 0;
    }

    const extraToken = tokensUsed - 500;
    const chargeableToken = Math.floor(extraToken / 100);
    const totalCost = chargeableToken * 5;
    return totalCost;
}

const result = calculateAiCost(300);

console.log(result);
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost('500'));
console.log(calculateAiCost(-10));
console.log(calculateAiCost(null));
console.log(calculateAiCost([1000]));
console.log(calculateAiCost(NaN));
console.log();

console.log(Number.isNaN(NaN));