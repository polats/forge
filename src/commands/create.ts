import {Command, flags} from '@oclif/command'
require('dotenv').config()

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
    const Web3 = require('web3')
    const rpcURL = (process.env.RPC_SERVER as string) + process.env.INFURA_API_KEY
    const web3 = new Web3(rpcURL)
    const address = process.env.USER_ADDRESS

    web3.eth.getBalance(address, (err : Error, wei: number) => {

      if (err) 
      {
        console.log('ERROR: ' + err.message)
      }
      let balance : number = web3.utils.fromWei(wei, 'ether')
      console.log('Balance - ' + address + ': ' + balance + 'ETH')
    })
  }
}
