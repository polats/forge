import Command, {flags} from '@oclif/command'
import * as fs from 'fs'

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
    // Confirm file overwrite
    if (Files.fileExists('.env')) {
      const question = 'AskEnvFileOverwrite'
      const confirm = await inquirer.askEnvFileOverwrite()
      if (!confirm[question]) {
        console.log('Aborting.')
        this.exit()
      }
    }

    const answers = await inquirer.askEnvInitializationVariables()

    let fileOutput = ''
    Object.keys(answers).map((key: string) => {
      fileOutput += (key + '=' + answers[key] + '\n')
    })

    fs.writeFile('.env', fileOutput, function (err) {
      if (err) throw err
      console.log('init success.')
    })
  }
}
