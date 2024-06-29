// Task 1

function Account (accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2

Account.prototype.deposit = function (amount) {
    this.balance += amount
    return `Deposit: $${amount} - New Balance: $${this.balance}`
}

Account.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount
        return `Withdraw: $${amount} - New Balance: $${this.balance}`
    } else {
        return 'Insufficient funds';
    }
};

let bankAccount = new Account(1565465, 300, "Sam Kraft");

console.log(bankAccount.deposit(500));

console.log(bankAccount.withdraw(500));


// Task 3

Account.prototype.compoundInterest = function(rate, years) {
    let compoundedAmount = this.balance * Math.pow((1 + rate), years);
    return `Interest accumulated: ${(compoundedAmount - this.balance).toFixed(2)}`;
}


console.log(bankAccount.compoundInterest(.05, 5))