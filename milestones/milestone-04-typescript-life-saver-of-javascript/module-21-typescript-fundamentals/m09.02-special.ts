// Special types: nullable, any, unknown and never

function calculateTex1(amount: number | string, taxRate: number): number {
    if(typeof amount === 'string') {
        amount = parseFloat(amount);
    }

    return amount * taxRate;
}

const myTax1 = calculateTex1(100, 0.15);
console.log(myTax1);

const youTax = calculateTex1('200', 0.2); 
console.log(youTax);