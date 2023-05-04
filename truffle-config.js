require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider('lawsuit alter connect round bus casual collect hidden mass piano ridge sweet', 'https://sepolia.infura.io/v3/57907d2015214f31808056178b3d8201'),
      network_id: '11155111',
      gas: 4465030
    }
  },
  compilers: {
    solc: {
      version: "0.8.18" // or whichever version you want to use
    }
  }
};
