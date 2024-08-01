
const accountBaseService = require('./account-base');

const corporateInvestmentAccountServiceFactory = (params) => {
    getAccountType = () => {
        return 'Corporate Investment';
    };
    return {
        getAccountType,
        ...accountBaseService.accountBase(params)
    };
};

module.exports = { corporateInvestmentAccountServiceFactory };