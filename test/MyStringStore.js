const MyStringStore = artifacts.require('../contracts/MyStringStore.sol');

contract("MyStringStore", accounts => {
    it('should store the string `Hey there!`', async () => {
        const myStringStore = await MyStringStore.deployed();

        //set myString to 'Hey There!'
        await myStringStore.set("Hey There!", { from: accounts[0] });

        // Get myString from public variable getter
        const storedString = await myStringStore.myString.call();

        assert.equal(storedString, "Hey There!", "The string was not stored")
    })
})