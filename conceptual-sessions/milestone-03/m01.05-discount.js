const discountPrices = (prices) => {
    const updatedPrices = prices.map(price => price - 5);
    console.log(updatedPrices);
};

let prices = [100, 250, 80];

discountPrices(prices);