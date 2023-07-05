import { Contract, providers, Wallet, utils } from "ethers";
import { ABI } from "./constantants/abi";
require("dotenv").config();

const main = async () => {
  try {
    console.log("we are here")
    const proxyAddress = "0xe5f51EbdC500941f443E2B46a65877d13A6B2b28" 
    const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY!
    const NODE_URL = process.env.ALCHEMY_GOERLI_URL!
    const provider = new providers.JsonRpcProvider(NODE_URL);
    const signer = new Wallet(PRIVATE_KEY);
    const account = signer.connect(provider);
    const contract = new Contract(proxyAddress, ABI, account);

    const newOwner = "0xB46343b38F425fe40c7FB3e2a8Cdd22D4105B393";
    let encodedData = utils.defaultAbiCoder.encode(
      ['address'],
      [newOwner]
    );

    const tx = await contract.setNewOwner(
      newOwner
    )
    
    console.log(encodedData);
    return tx
  

  } catch (error) {
    console.log("Error", error);
  }
};

main();
