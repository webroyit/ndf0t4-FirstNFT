const { assert } = require('chai');

const Color = artifacts.require("Color");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Color', (accounts) => {
    let contract;

    before(async () => {
        contract = await Color.deployed();
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = contract.address;
            assert.notEqual(address, '0x0');
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        })

        it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'Color');
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'COLOR');
        })
    })

    describe('minting', async () => {
        it('create a new token', async () => {
            const result = await contract.mint('#42f560');
            const totalSupply = await contract.totalSupply();
            
            // Success
            assert.equal(totalSupply, 1);
            const event = result.logs[0].args;
            assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
            assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct');
            assert.equal(event.to, accounts[0], 'to is correct');

            // Failure: cannot mint same color twice
            await contract.mint('#42f560').should.be.rejected;
        })
    })

    describe('indexing', async () => {
        it('lists colors', async () => {
            // Mint 3 more tokens
            await contract.mint('#70706e');
            await contract.mint('#bf2a98');
            await contract.mint('#8f7f3f');
            const totalSupply = await contract.totalSupply();
            
            let color;
            let result = [];

            for (let i = 1; i <= totalSupply; i++) {
                color = await contract.colors(i - 1);
                result.push(color);
            }

            let expected = ['#42f560', '#70706e', '#bf2a98', '#8f7f3f'];
            assert.equal(result.join(','), expected.join(','));
        })
    })
})