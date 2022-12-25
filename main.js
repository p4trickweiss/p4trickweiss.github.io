const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const accountAddress = await signer.getAddress()
    console.log(accountAddress)
}

const getBlockHeight = async () => {
    var blockHeight = await provider.getBlockNumber('latest')
    console.log(blockHeight)
}