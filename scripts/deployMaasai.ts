import { ethers } from "hardhat";

async function main() {
  
  const Lock = await ethers.getContractFactory("Maasai");
  const pepe = await Lock.deploy();

  console.log("deployed contract")

  await pepe.deployed();


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
