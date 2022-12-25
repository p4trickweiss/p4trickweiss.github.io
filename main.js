const connectWallet = async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const accountAddress = await signer.getAddress()
    console.log(accountAddress)
}

const getBlockHeight = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])

    var blockHeight = await provider.getBlockNumber('latest')
    console.log(blockHeight)
}

const getBalanceOf = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const account = await provider.send("eth_requestAccounts", [])

    const address = "0xB30CE5F46fC9Ad14786789ABAF039a92A29DE912"
    const ERC20_ABI = [
        "function balanceOf(address owner) view returns (uint256)",
        "function name() view returns (string)",
    ];
    const contract = new ethers.Contract(address, ERC20_ABI, provider);
    let balance = await contract.balanceOf(account)
    console.log(ethers.utils.formatUnits(balance, 18))
}