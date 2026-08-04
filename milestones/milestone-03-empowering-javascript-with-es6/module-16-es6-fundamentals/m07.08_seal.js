// Object Methods: seal

const bankAccount = {
    accountNumber: '1234',
    balance: 5000
};

console.log(bankAccount);

const seal = Object.seal(bankAccount);
bankAccount.balance = 1500000                          // update

console.log(seal);