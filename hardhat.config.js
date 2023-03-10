/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = 'A-sbKnnbIylma80taka9lxSvOWfpo2M7'

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = 'YOUR ROPSTEN PRIVATE KEY'

module.exports = {
  solidity: '0.8.17',
  networks: {
    ropsten: {
      // 这里指定的url就是为测试网（ropsten）获取/提供一些假的ETH
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
}
