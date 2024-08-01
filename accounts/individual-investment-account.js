
const accountBaseService = require('./account-base');

const individualInvestmentAccountServiceFactory = (params) => {
    params.withdrawalLimit = 500; // TODO (Production): Maintain externally.
    getAccountType = () => {
        return 'Individual Investment';
    };
    return {
        getAccountType,
        ...accountBaseService.accountBase(params)
    };
};

module.exports = { individualInvestmentAccountServiceFactory };