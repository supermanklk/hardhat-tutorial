pragma solidity ^0.8.7;
import "./SafeMath.sol";
import "./Address.sol";
import "./Random.sol";

contract MnemonicGenerator {
    using SafeMath for uint256;
    using Address for address;
    using Random for uint256;

    string constant wordList =
        "abandon about absent absorb abstract absurd abuse access accident account accuse achieve acid acoustic acquire across act action actor address admire admit adopt adore advertise advice aerial affair air airship all allow almost alone along already also alter always amaze ambassador amazing among amount amused analyst analyze ancient angel anger angle angry animal animate announce annual another answer antenna antique anxiety any anybody anymore anyone anything anyway anywhere apart apology apparent appear apple approve";

    mapping(uint256 => string) public mnemonic;

    constructor() public {
        Random.seed(address(this));
    }

    function generateMnemonic(uint256 _count) public {
        uint256 wordIndex = randomIndexes[i];
        string memory word = wordList.split(" ")[wordIndex];
        mnemonic[i] = word;
    }
}
