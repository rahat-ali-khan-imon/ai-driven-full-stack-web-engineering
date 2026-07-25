/*
Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% 
discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators 
combined with if-else if.
*/


let cartTotal = 1500;
let isMember = true;

if(cartTotal > 1000 && isMember) {
    const discount = cartTotal * 0.20;
    console.log("20% Discount Applied");
    console.log("Discount Amount:", discount);
} else if(cartTotal > 1000) {
    const discount = cartTotal * 0.10;
    console.log("10% Discount Applied");
    console.log("Discount Amount:", discount);
} else {
    console.log("No Discount");
}
console.log();



cartTotal = 1500;
isMember = false;

if(cartTotal > 1000 && isMember) {
    const discount = cartTotal * 0.20;
    console.log("20% Discount Applied");
    console.log("Discount Amount:", discount);
} else if(cartTotal > 1000) {
    const discount = cartTotal * 0.10;
    console.log("10% Discount Applied");
    console.log("Discount Amount:", discount);
} else {
    console.log("No Discount");
}
console.log();



cartTotal = 800;
isMember = true;

if(cartTotal > 1000 && isMember) {
    const discount = cartTotal * 0.20;
    console.log("20% Discount Applied");
    console.log("Discount Amount:", discount);
} else if(cartTotal > 1000) {
    const discount = cartTotal * 0.10;
    console.log("10% Discount Applied");
    console.log("Discount Amount:", discount);
} else {
    console.log("No Discount");
}