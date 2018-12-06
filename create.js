#!/usr/bin/env node
require('dotenv').config();

const Web3 = require('web3')
const rpcURL = process.env.RPC_SERVER + process.env.INFURA_API_KEY;
const web3 = new Web3(rpcURL);
const address = process.env.USER_ADDRESS;

web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
  console.log("Balance - " + address + ": " + balance + "ETH");
})
