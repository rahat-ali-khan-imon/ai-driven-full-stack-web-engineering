// interface Response {
//     // data: any;
//     data: string | number | boolean | object | null;
//     status: number;
// }


interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction Successful",
    // data: true,
    status: 200
}

const transactionStatus: Response<boolean> = {
    data: false,
    status: 250
}

const transactionAmount: Response<number> = {
    data: 215,
    status: 401
}


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