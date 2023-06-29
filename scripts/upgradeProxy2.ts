import { ethers, upgrades } from 'hardhat';

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xe5f51EbdC500941f443E2B46a65877d13A6B2b28';

async function main() {

    try {
        const VendingMachineV3 = await ethers.getContractFactory('VendingMachineV3');
        const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

        if (upgraded) {
            const implementationAddress = await upgrades.erc1967.getImplementationAddress(
                proxyAddress
            );

            console.log("The current contract owner is: " + upgraded.owner());
            console.log('Implementation contract address: ' + implementationAddress);
            
        }

    } catch (error) {
        console.log("Unable to upgrade contract", error)
    }


}



main();