/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.
*/

var status1 = "Order Placed";

for (var i = 1; i <= 3; i++) {
    var status1 = "Processing Item " + i;
    console.log(status1);
}

console.log("Final Status:", status1);
console.log();



let status2 = "Order Placed";                           // let

for (let i = 1; i <= 3; i++) {
    let status2 = "Processing Item " + i;
    console.log(status2);
}

console.log("Final Status:", status2);