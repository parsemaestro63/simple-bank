import { corporateInvestmentAccountServiceFactory } from '../../accounts/corporate-investment-account';
import { accountOwnerServiceFactory } from '../../account-owner';
import IAccount from '../../typings/interfaces/IAccount';

describe('Corporate Investment account', () => {
    let corporateInvestmentAccount: IAccount, 
        corporateInvestmentAccount2: IAccount;
    
    beforeEach(() => {
        const accountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwnerServiceFactory('Chris')
        };
        const accountParams2 = {
            id: 2,
            balance: 800,
            owner: accountOwnerServiceFactory('Chris')
        };
        
        corporateInvestmentAccount = corporateInvestmentAccountServiceFactory(accountParams);
        corporateInvestmentAccount2 = corporateInvestmentAccountServiceFactory(accountParams2);
    });

    test('initializes a corporate investment account with the requried config.', () => {
        expect(corporateInvestmentAccount.getId()).toEqual(1);
        expect(corporateInvestmentAccount.getBalance()).toEqual(1000);
        expect(corporateInvestmentAccount.getOwner().getName()).toEqual('Chris');
        expect(corporateInvestmentAccount.getType()).toEqual('Corporate Investment');
    });

   describe('Transfers', () => {
        test('transfer from account to account.', () => {
            expect(corporateInvestmentAccount.getBalance()).toEqual(1000);
            expect(corporateInvestmentAccount2.getBalance()).toEqual(800);
            corporateInvestmentAccount.transfer(corporateInvestmentAccount2, 200);
            expect(corporateInvestmentAccount.getBalance()).toEqual(800);
            expect(corporateInvestmentAccount2.getBalance()).toEqual(1000);
        });
    
        test('transfer fails given a larger amount than account balance.', () => {
            expect(corporateInvestmentAccount.getBalance()).toEqual(1000);
            expect(() => corporateInvestmentAccount.transfer(corporateInvestmentAccount2, 2000))
                .toThrow(Error);
        });
    });

    describe('Withdrawals', () => {
        test('withdrawal from a corporate investment account.', () => {
            expect(corporateInvestmentAccount.getBalance()).toEqual(1000);
            corporateInvestmentAccount.withdraw(600);
            expect(corporateInvestmentAccount.getBalance()).toEqual(400);
        });
    });
});