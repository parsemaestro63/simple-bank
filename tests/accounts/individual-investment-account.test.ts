import { individualInvestmentAccountServiceFactory } from '../../accounts/individual-investment-account';
import { accountOwnerServiceFactory } from '../../account-owner';
import IAccount from '../../typings/interfaces/IAccount';

describe('Account', () => {
    let individualInvestmentAccount: IAccount;
    
    beforeEach(() => {
        const accountParams = {
            id: 1,
            balance: 1000,
            owner: accountOwnerServiceFactory('Chris')
        };
        
        individualInvestmentAccount = individualInvestmentAccountServiceFactory(accountParams);
    });

    test('initializes an individual investment account with the requried config.', () => {
        expect(individualInvestmentAccount.getId()).toEqual(1);
        expect(individualInvestmentAccount.getBalance()).toEqual(1000);
        expect(individualInvestmentAccount.getOwner().getName()).toEqual('Chris');
        expect(individualInvestmentAccount.getType()).toEqual('Individual Investment');
    });

    describe('Withdrawals', () => {
        test('withdrawal from an individual investment account.', () => {
            expect(individualInvestmentAccount.getBalance()).toEqual(1000);
            individualInvestmentAccount.withdraw(200);
            expect(individualInvestmentAccount.getBalance()).toEqual(800);
        });
    
        test('withdrawal fails given a larger amount than account balance.', () => {
            expect(individualInvestmentAccount.getBalance()).toEqual(1000);
            expect(() => individualInvestmentAccount.withdraw(2000))
                .toThrow(Error);
        });
    
        test('withdrawal fails given a larger than allowed amount.', () => {
            expect(individualInvestmentAccount.getBalance()).toEqual(1000);
            expect(() => individualInvestmentAccount.withdraw(800))
                .toThrow(`The withdrawal limit on your account is 500.`);
        });
    });
});