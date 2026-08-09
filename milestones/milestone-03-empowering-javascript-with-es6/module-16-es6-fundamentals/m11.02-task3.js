const generateReceipt = (customerName, items, total) => {
    if(!Array.isArray(items) || items.length === 0) {
        return 'Invalid';
    }
    return `
    Receipt for${customerName}
    Items: ${items}
    Total: ${total}`;
};

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));
console.log(generateReceipt("Alice", {}, 100));
console.log(generateReceipt("Jennie", undefined, 233));
console.log(generateReceipt('Jisoo', null, 233));