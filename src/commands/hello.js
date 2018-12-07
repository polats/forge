const {Command, flags} = require('@oclif/command')
require('dotenv').config();

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'world'
    const chalk       = require('chalk');
    const clear       = require('clear');
    const figlet      = require('figlet');
    const files       = require('../lib/files');

    this.log(`hello ${name} from .\\src\\commands\\hello.js`)

    if (!files.fileExists('.env')) {
      console.log(chalk.yellow("Environment file not found, running 'forge init'."));
      process.exit();
    }

    const Web3 = require('web3')
    const rpcURL = process.env.RPC_SERVER + process.env.INFURA_API_KEY;
    const web3 = new Web3(rpcURL);
    const address = process.env.USER_ADDRESS;

    web3.eth.getBalance(address, (err, wei) => {
      var balance = web3.utils.fromWei(wei, 'ether')
      console.log("Balance - " + address + ": " + balance + "ETH");
    })
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
