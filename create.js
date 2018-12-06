#!/usr/bin/env node
const config = require("./config");

const Web3 = require('web3')
const rpcURL = config.RPC_SERVER + config.INFURA_API_KEY;
const web3 = new Web3(rpcURL);
const address = config.USER_ADDRESS;

web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
  console.log("Balance - " + address + ": " + balance + "ETH");
})
