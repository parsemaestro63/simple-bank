
import IAccount from '../typings/interfaces/IAccount';
import { accountParams } from '../typings/types/account';
import { baseAccountServiceFactory } from './base-account';

export const checkingAccountServiceFactory = (params: accountParams): IAccount => {
    const getType = () => {
        return 'Checking';
    };
    return {
        ...baseAccountServiceFactory(params),
        getType,
    };
};