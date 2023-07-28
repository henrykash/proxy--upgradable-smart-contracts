import { ethers } from "hardhat";

async function main() {
  
  const  Mkulima = await ethers.getContractFactory("Mkulima");
  const mkulima = await Mkulima.deploy();
  await mkulima.deployed();
  console.log("deployed contract", mkulima)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
