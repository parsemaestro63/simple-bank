import IAccountOwner from './IAccountOwner';

export default interface IAccount {    
    deposit(amount: number): void;
    transfer(account: IAccount, amount: number): IAccount;
    withdraw(amount: number): void;
    getId(): number;
    getType(): string;
    getBalance(): number;
    getOwner(): IAccountOwner;
}