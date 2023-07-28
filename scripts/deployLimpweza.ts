import { ethers } from "hardhat";

async function main() {

    const Limpweza = await ethers.getContractFactory("Limpweza");
    const limpweza = await Limpweza.deploy();
    await limpweza.deployed();
    console.log("deployed contract", limpweza.address)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
