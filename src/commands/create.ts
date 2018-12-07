import {Command, flags} from '@oclif/command'
require('dotenv').config();

export default class Create extends Command {
  static description = 'Create a cryptoitem with the given parameters'

  static examples = [
    `$ forge create
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Create)
    const chalk       = require('chalk');
    const clear       = require('clear');
    const figlet      = require('figlet');
    const files       = require('../lib/files');

    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\commands\\create.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

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
