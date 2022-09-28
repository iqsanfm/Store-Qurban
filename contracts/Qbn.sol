//SPDX-License-Identifier:MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Qbn is ERC20 {
    constructor() ERC20("Qurban Token", "QBN") {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);

    }
    

}
