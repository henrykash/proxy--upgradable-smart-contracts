import { ethers } from "hardhat";

async function main() {
  


  const Pepe = await ethers.getContractFactory("Pepe");
  const pepe = await Pepe.deploy();

  await pepe.deployed();


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
