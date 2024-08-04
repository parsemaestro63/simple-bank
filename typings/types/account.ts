import IAccountOwner from '../interfaces/IAccountOwner';

export type accountParams = {
    id: number,
    owner: IAccountOwner
    balance?: number,
    withdrawalLimit?: number,
};