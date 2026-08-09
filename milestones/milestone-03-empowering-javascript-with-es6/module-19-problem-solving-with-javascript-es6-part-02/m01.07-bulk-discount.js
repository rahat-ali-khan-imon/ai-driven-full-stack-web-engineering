const applyDiscount = (prices, discountRate = 0) => {
    const pricesAfterDiscount = prices.map((element, idx, arr) => {
        const discountPrice = element - ((element * discountRate) / 100);
        return discountPrice;
    });

    return pricesAfterDiscount;
};

const productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log(productPrices);                                     //