
const accountBaseService = require('./account-base');

// TODO (Production): Refactor params for the real-world to use typings for strict configuration.
const checkingAccountServiceFactory = (params) => {
    getAccountType = () => {
        return 'Checking';
    };
    return {
        getAccountType,
        ...accountBaseService.accountBase(params)
    };
};

module.exports = { checkingAccountServiceFactory };