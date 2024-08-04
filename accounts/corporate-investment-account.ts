
import IAccount from '../typings/interfaces/IAccount';
import { accountParams } from '../typings/types/account';
import { baseAccountServiceFactory } from './base-account';

export const corporateInvestmentAccountServiceFactory = (params: accountParams): IAccount => {
    const getType = () => {
        return 'Corporate Investment';
    };
    return {
        ...baseAccountServiceFactory(params),
        getType,
    };
};