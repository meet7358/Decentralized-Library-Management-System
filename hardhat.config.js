require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{  
    goerli:{
      url:process.env.ALCHEMY_URL,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  }
};


