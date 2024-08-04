
import IAccount from '../typings/interfaces/IAccount';
import { accountParams } from '../typings/types/account';
import { baseAccountServiceFactory } from './base-account';

export const individualInvestmentAccountServiceFactory = (params: accountParams): IAccount => {
    params.withdrawalLimit = 500; // TODO (Production): Maintain externally.
    const getType = () => {
        return 'Individual Investment';
    };
    return {
        ...baseAccountServiceFactory(params),
        getType,
    };
};