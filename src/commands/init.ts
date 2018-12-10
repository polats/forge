import Command, {flags} from '@oclif/command'
import chalk from 'chalk'

import {Files} from '../files'

const inquirer = require('../inquirer')

export class Init extends Command {
  static description = 'Initializes the needed variables such as URLs and API keys'

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
    const answers = await inquirer.askEnvInitializationVariables()
    console.log(answers)

    if (!Files.fileExists('.env')) {
      console.log(chalk.yellow("Environment file not found, running 'forge init'."))
      process.exit()
    } else {
      console.log('init success.')
    }
  }
}
