const discountTotal = (prices) => {
    let updatedPrices = [];

    for(let i = 0; i < prices.length; i++) {
        let discountPrice = prices[i] - 5;
        updatedPrices.push(discountPrice);
    }
    
    let total = 0;
    for(let i = 0; i < updatedPrices.length; i++) {
        total += updatedPrices[i];
    }

    return total;
}

let prices = [100, 250, 80];

console.log(discountTotal(prices));