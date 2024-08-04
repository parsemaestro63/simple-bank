import IAccount from "../typings/interfaces/IAccount";
import { bankServiceFactory } from '../bank';
import { accountOwnerServiceFactory } from '../account-owner';
import { checkingAccountServiceFactory } from '../accounts/checking-account';

describe('Bank', () => {
    let bank = bankServiceFactory('Chase'),
        checkingAccount: IAccount,
        checkingAccount2: IAccount;

    beforeEach(() => {
        const accountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwnerServiceFactory('Chris')
        };
        checkingAccount = checkingAccountServiceFactory(accountParams);
        const accountParams2 = {
            id: 2,
            balance: 1000,
            owner: accountOwnerServiceFactory('Andrew')
        };
        checkingAccount2 = checkingAccountServiceFactory(accountParams2);
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