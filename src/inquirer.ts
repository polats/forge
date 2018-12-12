const inquirer = require('inquirer')
import chalk from 'chalk'

module.exports = {
  askEnvInitializationVariables: () => {
    const questions = [
      {
        name: 'INFURA_API_KEY',
        type: 'input',
        message: 'Enter your Infura API key:'
      },
      {
        name: 'RPC_SERVER',
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
        name: 'USER_ADDRESS',
        type: 'input',
        message: 'Enter ETH wallet address to use:'
      }
    ]
    return inquirer.prompt(questions)
  },
  askEnvFileOverwrite: () => {
    const questions = [
      {
        name: 'AskEnvFileOverwrite',
        type: 'confirm',
        message: chalk.yellow('Existing .env file found. Overwrite?')
      }
    ]
    return inquirer.prompt(questions)
  }
}
