const discountTotal = (prices) => {
    let updatedPrices = [];

    for(let i = 0; i < prices.length; i++) {
        let discountPrice = prices[i] - 5;
        updatedPrices.push(discountPrice);
    }
    
    console.log(updatedPrices);
}

let prices = [100, 250, 80];

discountTotal(prices);