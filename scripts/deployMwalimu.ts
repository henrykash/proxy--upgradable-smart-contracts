import { ethers } from "hardhat";

async function main() {

    const Mwalimu = await ethers.getContractFactory("Mwalimu");
    const mwalimu = await Mwalimu.deploy();
    await mwalimu.deployed();
    console.log("deployed contract", mwalimu.address)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
