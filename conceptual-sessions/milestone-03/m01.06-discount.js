const discountPrices = (prices) => {
    const updatedPrices = prices.map(price => price - 5);
    
    const total = updatedPrices.reduce((sum, prices) => sum + prices, 0);               //
    return total;
};

let prices = [100, 250, 80];

console.log(discountPrices(prices));