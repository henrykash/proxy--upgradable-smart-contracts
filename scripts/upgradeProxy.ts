import { ethers, upgrades } from 'hardhat';

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xE03d24d012Ad4569Ccf09A0C9e4aAF9b390Ed732';

async function main() {

    try {
        const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
        const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

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