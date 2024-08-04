import IAccount from '../typings/interfaces/IAccount';
import { accountParams } from '../typings/types/account';

export const baseAccountServiceFactory = (params: accountParams) => {
    // Initialize account.
    let _id = params.id;
    let _balance = params.balance ?? 0;
    let _owner = params.owner;
    let _withdrawalLimit = params.withdrawalLimit;

    const deposit = (amount: number) => {
        if (amount <= 0) {
            throw new Error ('Deposit amounts allowed are 1 and greater.');
        }
        _balance += amount;
    };

    const transfer = (account: IAccount, amount: number) => {
        if ((_balance - amount) < 0) {
            throw new Error(`Your account balance (${_balance}) is insufficient to transfer ${amount}.`);
        }
        account.deposit(amount);
        _balance -= amount;
        return account;
    };

    const withdraw = (amount: number) => {
        const isOverWithdrawalLimit = (_withdrawalLimit && amount > _withdrawalLimit);
        if (isOverWithdrawalLimit) {
            throw new Error(`The withdrawal limit on your account is ${params.withdrawalLimit}.`);
        }
        if ((_balance - amount) < 0) {
            throw new Error(`Your account balance (${_balance}) is insufficient to withdraw ${amount}.`);
        }
        _balance -= amount;
    };  
      
    const getId = () => _id;

    const getBalance = () => _balance;
    
    const getOwner = () => _owner;
    
    return {
        deposit,
        transfer,
        withdraw,
        getId,
        getOwner,
        getBalance
    };
};