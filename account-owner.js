const accountOwnerServiceFactory = (name) => {
    return {
        getName: () => {
            return name;
        }
    };    
};

module.exports = { accountOwnerServiceFactory };