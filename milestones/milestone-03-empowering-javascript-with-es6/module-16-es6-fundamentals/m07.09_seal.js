// Object Methods: seal

const bankAccount = {
    accountNumber: '1234',
    balance: 5000
};

console.log(bankAccount);

const seal = Object.seal(bankAccount);
bankAccount.nomineeName = 'Something';                          // not add

console.log(seal);