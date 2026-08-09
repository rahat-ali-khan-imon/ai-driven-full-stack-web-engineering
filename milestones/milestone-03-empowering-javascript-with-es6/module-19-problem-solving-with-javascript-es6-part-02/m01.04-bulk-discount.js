const applyDiscount = (prices, discountRate = 0) => {                             // default value
    const pricesAfterDiscount = prices.map((element, idx, arr) => {
        const discountPrice = element - ((element * discountRate) / 100);
        console.log(discountPrice);
    });
};

const productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices));