var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'spell roof glimpse valid quit make grocery worth need end salad master';

module.exports = {
  compilers: {
    solc: {
      version: "0.8.17",
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://goerli.infura.io/v3/b4b06ee178cd413db15e4a6bcee68fab")
      },
      network_id: 5,
      gas: 8000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};