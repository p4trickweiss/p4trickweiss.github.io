//const { ethers } = require("ethers");


//const provider = new ethers.getDefaultProvider('goerli');

const main = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

    //const provider = new ethers.providers.Web3Provider(window.ethereum, any)
    

    // MetaMask requires requesting permission to connect users accounts
    const account = await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    //const signer = provider.getSigner()

    //console.log(account)

}

/*
const getBlockHeight = async () => {
    var blockHeight = await provider.getBlockNumber('latest')
    console.log(blockHeight)
}
*/
