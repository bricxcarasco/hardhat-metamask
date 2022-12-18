const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Deposit", async () => {
    const Deposit = await ethers.getContractFactory("Deposit");
    const deposit = await Deposit.deploy();
    await deposit.deployed();

    it("Should return the new balance after ether is deposited", async () => {
        await deposit.deposit({value: 10});
        expect(await ethers.provider.getBalance(deposit.address)).to.equal(10);
    });
});