import { checkingAccountServiceFactory } from '../../accounts/checking-account';
import { accountOwnerServiceFactory } from '../../account-owner';
import IAccount from '../../typings/interfaces/IAccount';

describe('Checking account', () => {
    let checkingAccount: IAccount;
    
    beforeEach(() => {
        const checkingAccountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwnerServiceFactory('Chris')
        };
        
        checkingAccount = checkingAccountServiceFactory(checkingAccountParams);
    });

    test('initializes a checking account with the requried config.', () => {
        expect(checkingAccount.getId()).toEqual(1);
        expect(checkingAccount.getBalance()).toEqual(1000);
        expect(checkingAccount.getOwner().getName()).toEqual('Chris');
        expect(checkingAccount.getType()).toEqual('Checking');
    });

    describe('Deposits', () => {
        test('deposits into a checking account.', () => {
            expect(checkingAccount.getBalance()).toEqual(1000);
            checkingAccount.deposit(1000);
            expect(checkingAccount.getBalance()).toEqual(2000);
        });
    
        test('deposits of 0 or less fail.', () => {
            expect(() => checkingAccount.deposit(0)).toThrow(Error);
            expect(() => checkingAccount.deposit(-100)).toThrow(Error);
        });
    });
});