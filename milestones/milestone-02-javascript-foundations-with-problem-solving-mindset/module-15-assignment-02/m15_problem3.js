function calculateAiCost(tokensUsed) {
    const extraToken = tokensUsed - 500;
    const chargeableToken = extraToken / 100;
    return chargeableToken;
}

const result = calculateAiCost(300);

console.log(result);
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));