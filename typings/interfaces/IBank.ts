import IAccount from './IAccount';

export default interface IBank {
    getName(): string;
    setAccount(account: IAccount): void;
    getAccount(id: number): IAccount;
    getAccounts(): IAccount[];
}