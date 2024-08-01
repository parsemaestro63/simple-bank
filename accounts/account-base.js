const accountBase = (params) => {
    // Initialize account.
    // TODO: Validate inputs (make use of types in production).
    let _id = params.id;
    let _balance = params.balance ?? 0;
    let _owner = params.owner; 

    deposit = (amount) => {
        if (amount <= 0) {
            throw new Error ('Deposit amounts allowed are 1 and greater.');
        }
        _balance += amount;
    };
    transfer = (account, amount) => {
        if ((_balance - amount) < 0) {
            throw new Error(`Your account balance (${_balance}) is insufficient to transfer ${amount}.`);
        }
        account.deposit(amount);
        _balance -= amount;
        return account;
    };
    withdraw = (amount) => {
        const isOverWithdrawalLimit = (params.withdrawalLimit && amount > params.withdrawalLimit);
        if (isOverWithdrawalLimit) {
            throw new Error(`The withdrawal limit on your account is ${params.withdrawalLimit}.`);
        }
        if ((_balance - amount) < 0) {
            throw new Error(`Your account balance (${_balance}) is insufficient to withdraw ${amount}.`);
        }
        _balance -= amount;
    }
    
    getId = () => {
        return _id;
    };
    getBalance = () => {
        return _balance;
    };
    getOwner = () => {
        return _owner;
    };
    
    return {
        deposit,
        transfer,
        withdraw,
        getId,
        getOwner,
        getBalance
    };
};

module.exports = { accountBase };