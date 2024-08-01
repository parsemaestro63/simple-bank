const bank = (name) => {
    let _name = name;
    let _accounts = [];

    getName = () => {
        return _name;
    };

    setAccount = (account) => {
        const accountExists = _accounts.some(_account => _account.getId() === account.getId());
        if (! accountExists) {
            _accounts.push(account);            
        }
    };

    getAccount = (id) => {
        const account = _accounts.find(_account => _account.getId() === id);
        if (! account) {
            throw new Error('The account searched for was not found');
        }
        
        return account;
    };

    getAccounts = () => {
        return _accounts;
    };

    return {
        getName,
        setAccount,
        getAccount,
        getAccounts
    };
};

module.exports = { bank };