require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          // This way i forked UniswapV2RouterV2
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          // This way i forked UniswapV2RouterV2
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          // This way i forked UniswapV2RouterV2
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["evm.bytecode", "evm.deployedBytecode", "abi"],
            },
          },
          libraries: {},
        },
      },
      {
        version: "0.8.0",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17 ",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  }
};
