const main = async () => {
    if(window.ethereum) {
        console.log("found")
    }
    else {
        console.log("error")
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const account = await provider.send("eth_requestAccounts", [])
    console.log(account)
}

const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const accountAddress = await signer.getAddress()
    console.log(accountAddress)
}