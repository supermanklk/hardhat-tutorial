### Hardhat 架构
Hardhat是围绕**task(任务)和plugins(插件)**的概念设计的。 **Hardhat **的大部分功能来自插件，作为开发人员，你可以自由选择 你要使用的插件。

#### Tasks(任务)
每次在命令行运行Hardhat时，都是在运行任务。 例如 npx hardhat compile正在运行compile任务。 要查看项目中当前可用的任务，运行npx hardhat。 通过运行npx hardhat help [task]，可以探索任何任务。

#### Plugins(插件)
Hardhat 不限制选择哪种工具，但是它确实内置了一些插件，所有这些也都可以覆盖。 大多数时候，使用给定工具的方法是将其集成到Hardhat中作为插件。

#### 实现逻辑你需要知道：

代币有固定发行总量。
所有发行总量都分配给了部署合约的地址。
任何人都可以接收代币。
任何人拥有代币的人都可以转让代币。
代币不可分割。 你可以转让1、2、3或37个代币，但不能转让2.5个代币。



#### 测试合约

为智能合约编写自动化测试至关重要，因为事关用户资金。 为此，我们将使用Hardhat Network，这是一个内置的以太坊网络，专门为开发设计，并且是Hardhat中的默认网络。 无需进行任何设置即可使用它。 在我们的测试中，我们将使用ethers.js与前面构建的合约进行交互，并使用 Mocha 作为测试运行器。

ethers.js 和 web3.js 都是 JavaScript 库，主要用于与 Ethereum 区块链进行交互。

是它们之间有一些重要的差异：

设计目标：ethers.js 更注重易用性和简洁性，而 web3.js 更注重灵活性和功能丰富性。

安全性：ethers.js 提供了更多的安全保障，例如自动处理交易签名，防止发送交易到错误的地址。

API 简洁性：ethers.js 的 API 更简洁易用，而 web3.js 的 API 稍微复杂一些。

总的来说，如果您需要一个简单易用的库，推荐使用 ethers.js，如果需要一个更灵活的库，推荐使用 web3.js。

#### Mocha 是什么？
Mocha 是一个 JavaScript 测试框架，它适用于各种类型的测试，如单元测试、集成测试等。它的特点是易于使用，可以方便地编写测试用例，并支持异步测试。Mocha 可以与其他测试工具，如 Chai、Sinon 等，配合使用，提供了丰富的断言库和测试助手。

#### Hardhat Network 调试
Hardhat内置了Hardhat Network ，这是一个专为开发而设计的以太坊网络。 它允许你部署合约，运行测试和调试代码。 这是Hardhat所连接的默认网络，因此你无需进行任何设置即可工作。 你只需运行测试就好。
在Hardhat Network上运行合约和测试时，你可以在Solidity代码中调用console.log()打印日志信息和合约变量。 你必须先从合约代码中导入**Hardhat **的console.log再使用它。

#### 部署到真实网络
具有真实价值的以太坊网络被称为“主网”，然后还有一些不具有真实价值但能够很好地模拟主网的网络，它可以被其他人共享阶段的环境。 这些被称为“测试网”，以太坊有多个测试网：Ropsten，Kovan，Rinkeby和Goerli。 我们建议你将合约部署到Ropsten测试网。

在应用软件层，部署到测试网与部署到主网相同。 唯一的区别是你连接到哪个网络。 让我们研究一下使用ethers.js部署合约的代码是什么样的。

主要概念是Signer，ContractFactory和Contract，我们在[测试]testing 部分中对此进行了解释。与测试相比，并没有什么新的内容，因为当在测试合约时，实际上是在向开发网络进行部署。 因此代码非常相似或相同。

### 部署到远程网络
要部署到诸如主网或任何测试网之类的线上网络，你需要在hardhat.config.js 文件中添加一个network条目。 在此示例中，我们将使用Ropsten，但你可以类似地添加其他网络：

我们使用了 Alchemy, 但是你将url指向其他任何以太坊节点或网关都是可以。请填入你自己的 ALCHEMY_API_KEY 。

要在Ropsten上进行部署，你需要将ropsten-ETH发送到将要进行部署的地址中。 你可以从水龙头（免费分发测试使用的ETH服务）获得一些用于测试网的ETH。 这是Ropsten的一个水龙头，你必须在进行交易之前将Metamask的网络更改为Ropsten。

你可以通过以下链接为其他测试网获取一些ETH

Kovan faucet
Rinkeby faucet
Goerli faucet





ps:
使用 "ethers": "^6.0.2", 执行 npx hardhat test 时候会报错：TypeError: Cannot read properties of undefined (reading 'JsonRpcProvider'

当你运行npx hardhat test时，如果合约在上次运行测试后发生了修改，则会对其进行重新编译。


Alchemy是什么？
Alchemy 是一家区块链技术公司，为开发人员提供快速，可靠和安全的区块链开发体验。它提供了一个基于云的区块链开发平台，使开发人员可以在几分钟内为他们的应用程序构建一个完整的区块链环境。Alchemy 提供了各种工具和资源，以帮助开发人员更快速，更有效地开发和部署区块链应用程序。