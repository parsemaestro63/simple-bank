const service = require('../account-owner.js');

describe('Account Owner', () => {
    test('assigns and returns a name.', () => {
        const accountOwner = service.accountOwnerServiceFactory('Chris');
        expect(accountOwner.getName()).toEqual('Chris');
    });
});