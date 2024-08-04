
import IAccount from './typings/interfaces/IAccount';
import IBank from './typings/interfaces/IBank';

export const bankServiceFactory = (name: string): IBank => {
    let _name = name;
    let _accounts: IAccount[] = [];

    const getName = () => {
        return _name;
    };

    const setAccount = (account: IAccount) => {
        const accountExists = _accounts.some(_account => _account.getId() === account.getId());
        if (! accountExists) {
            _accounts.push(account);            
        }
    };

    const getAccount = (id: number) => {
        const account = _accounts.find(_account => _account.getId() === id);
        if (! account) {
            throw new Error('The account searched for was not found');
        }
        
        return account;
    };

    const getAccounts = () => {
        return _accounts;
    };

    return {
        getName,
        setAccount,
        getAccount,
        getAccounts
    };
};