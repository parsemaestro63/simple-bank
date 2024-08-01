const service = require('../../accounts/checking-account.js');
const accountOwner = require('../../account-owner.js');

describe('Account', () => {
    let checkingAccount;
    
    beforeEach(() => {
        const checkingAccountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwner.accountOwnerServiceFactory('Chris')
        };
        
        checkingAccount = service.checkingAccountServiceFactory(checkingAccountParams);
    });

    test('initializes a checking account with the requried config.', () => {
        expect(checkingAccount.getId()).toEqual(1);
        expect(checkingAccount.getBalance()).toEqual(1000);
        expect(checkingAccount.getOwner().getName()).toEqual('Chris');
        expect(checkingAccount.getAccountType()).toEqual('Checking');
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