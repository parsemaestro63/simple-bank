import { accountOwnerServiceFactory } from '../account-owner';

describe('Account Owner', () => {
    test('assigns and returns a name.', () => {
        const accountOwner = accountOwnerServiceFactory('Chris');
        expect(accountOwner.getName()).toEqual('Chris');
    });
});