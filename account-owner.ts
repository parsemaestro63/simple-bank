import IAccountOwner from './typings/interfaces/IAccountOwner';

export const accountOwnerServiceFactory = (name: string): IAccountOwner => {
    return {
        getName: () => {
            return name;
        }
    };
};