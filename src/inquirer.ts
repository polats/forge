const inquirer = require('inquirer')

module.exports = {
  askEnvInitializationVariables: () => {
    const questions = [
      {
        name: 'infuraApiKey',
        type: 'input',
        message: 'Enter your Infura API key:'
      },
      {
        name: 'infuraRpcServer',
        type: 'list',
        message: 'Select Infura RPC server:',
        choices: [
          'https://mainnet.infura.io/',
          'https://ropsten.infura.io/',
          'https://rinkeby.infura.io/',
          'https://kovan.infura.io/',
          'https://infuranet.infura.io/'
        ],
        default: 'https://ropsten.infura.io/'
      },
      {
        name: 'ethDevAddress',
        type: 'input',
        message: 'Enter ETH wallet address to use:'
      }
    ]
    return inquirer.prompt(questions)
  },
}
