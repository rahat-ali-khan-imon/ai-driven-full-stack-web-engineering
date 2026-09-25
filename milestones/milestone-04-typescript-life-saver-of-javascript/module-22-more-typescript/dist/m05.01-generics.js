"use strict";
// interface Response {
//     // data: any;
//     data: string | number | boolean | object | null;
//     status: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction Successful",
    // data: true,
    status: 200
};
const transactionStatus = {
    data: false,
    status: 250
};
const transactionAmount = {
    data: 215,
    status: 401
};
console.log(transactionResponse);
console.log(transactionStatus);
console.log(transactionAmount);
console.log();
console.log(transactionResponse.data);
console.log(transactionResponse.status);
console.log(transactionStatus.data);
console.log(transactionStatus.status);
console.log(transactionAmount.data);
console.log(transactionAmount.status);
//# sourceMappingURL=m05.01-generics.js.map