// 为了在运行任何任务时指示Hardhat连接到特定的以太坊网络，可以使用--network参数。 像这样：

// npx hardhat run scripts/deploy.js --network <network-name>
// 在这种情况下，如果不使用--network 参数来运行它，则代码将再次部署在Hardhat network 上，
// 因此，当Hardhat network 关闭后，部署实际上会丢失，但是它用来测试我们的部署代码时仍然有用：

// $ npx hardhat run scripts/deploy.js
// 执行完上述命令之后输出如下

// Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// Account balance: 10000000000000000000000
// Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  console.log('Account balance:', (await deployer.getBalance()).toString())

  const Token = await ethers.getContractFactory('Token')
  const token = await Token.deploy()

  console.log('Token address:', token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
