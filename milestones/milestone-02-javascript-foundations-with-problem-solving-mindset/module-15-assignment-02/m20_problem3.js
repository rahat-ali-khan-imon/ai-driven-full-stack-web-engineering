function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number' || tokensUsed < 0) {                        //
        return 'Invalid';
    }

    if(tokensUsed <= 500) {
        return 0;
    } else {
        const extraToken = tokensUsed - 500;
        const chargeableToken = Math.floor(extraToken / 100);
        const totalCast = chargeableToken * 5;
        return totalCast;
    }
}

const result = calculateAiCost(300);

console.log(result);
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost('500'));
console.log(calculateAiCost(-10));                                  //