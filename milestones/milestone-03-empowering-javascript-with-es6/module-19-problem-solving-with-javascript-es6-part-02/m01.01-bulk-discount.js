/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

const applyDiscount = (prices, discountRate) => {
    // let pricesAfterDiscount = prices.map(function (element, idx, arr) {});
    let pricesAfterDiscount = prices.map((element, idx, arr) => {              // Callback function
        console.log(idx, element, arr);
    });
};

console.log(applyDiscount([500, 1000, 250]));