const applyDiscount = (prices, discountRate) => {
    const pricesAfterDiscount = prices.map((element, idx, arr) => {         // const
        console.log(idx, element, arr);
    });
};

const productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices));