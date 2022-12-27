const ethers = require("ethers")

connect() async {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log(accounts)
}