require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    mainnet: {
      provider: function() {
          return new HDWalletProvider(
              process.env.MNEMONIC,
              `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
          )
      },
      gas: 25000000,
      gasPrice: 250000000000,
      confirmations: 2,
      network_id: 1
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
