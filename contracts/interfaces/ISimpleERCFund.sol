pragma solidity ^0.8.13;

interface ISimpleERCFund {
    function deposit(
        address token,
        uint256 amount,
        string memory reason
    ) external;

    function withdraw(
        address token,
        uint256 amount,
        address to,
        string memory reason
    ) external;
}
