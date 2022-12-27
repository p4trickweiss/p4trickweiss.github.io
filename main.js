const getBlockHeight = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    let blockHeight = await provider.getBlockNumber('latest')
    document.getElementById("height").innerHTML = "Current Block Height: " + blockHeight
}

//contract info
const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function name() view returns (string)",
    "transfer(address _to, uint256 _value) public returns (bool success)"
];
const address = "0xB30CE5F46fC9Ad14786789ABAF039a92A29DE912"

const getBalanceOf = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const account = await provider.send("eth_requestAccounts", [])

    const contract = new ethers.Contract(address, ERC20_ABI, provider);
    let balance = await contract.balanceOf(account[0])
    document.getElementById("balance").innerHTML = "Balance of account " + account[0] + ": " + ethers.utils.formatUnits(balance, 18) + " AIT2"
}

const transaction = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(address, ERC20_ABI, signer)
    const numberOfDecimals = 18
    const numberOfTokens = ethers.utils.parseUnits('10.0', numberOfDecimals)
    const targetAddress = "0x15433DA387451F9dE4565280C85506CB71aF9376"
    contract.transfer(targetAddress, numberOfTokens)
}