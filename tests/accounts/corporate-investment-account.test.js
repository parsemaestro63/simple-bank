const service = require('../../accounts/corporate-investment-account.js');
const accountOwner = require('../../account-owner.js');

describe('Account', () => {
    let corporateInvestmentAccount, corporateInvestmentAccount2;
    
    beforeEach(() => {
        const accountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwner.accountOwnerServiceFactory('Chris')
        };
        const accountParams2 = {
            id: 2,
            balance: 800,
            owner: accountOwner.accountOwnerServiceFactory('Chris')
        };
        
        corporateInvestmentAccount = service.corporateInvestmentAccountServiceFactory(accountParams);
        corporateInvestmentAccount2 = service.corporateInvestmentAccountServiceFactory(accountParams2);
    });

    test('initializes a corporate investment account with the requried config.', () => {
        expect(corporateInvestmentAccount.getId()).toEqual(1);
        expect(corporateInvestmentAccount.getBalance()).toEqual(1000);
        expect(corporateInvestmentAccount.getOwner().getName()).toEqual('Chris');
        expect(corporateInvestmentAccount.getAccountType()).toEqual('Corporate Investment');
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