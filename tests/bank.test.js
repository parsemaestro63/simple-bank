const service = require('../bank.js');
const accountOwnerService = require('../account-owner.js');
const checkingAccountService = require('../accounts/checking-account.js');

describe('Bank', () => {
    let bank = service.bank('Chase'),
        checkingAccount,
        checkingAccount2;

    beforeEach(() => {
        const accountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwnerService.accountOwnerServiceFactory('Chris')
        };
        checkingAccount = checkingAccountService.checkingAccountServiceFactory(accountParams);
        const accountParams2 = {
            id: 2,
            balance: 1000,
            owner: accountOwnerService.accountOwnerServiceFactory('Andrew')
        };
        checkingAccount2 = checkingAccountService.checkingAccountServiceFactory(accountParams2);
        bank.setAccount(checkingAccount);
        bank.setAccount(checkingAccount2);

    });
    test('creates a bank with accounts.', () => {
        expect(bank.getAccounts()).toHaveLength(2);
        expect(bank.getAccount(1)).toEqual(checkingAccount);
        expect(bank.getAccount(2)).toEqual(checkingAccount2);
    });
    test('accessing non-existing accounts fail.', () => {
        expect(() => bank.getAccount(4)).toThrow(Error);
    });
});