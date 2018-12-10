import {expect, test} from '@oclif/test'
import * as fs from 'fs'

describe('init', () => {
  test
    .stdout()
    .command(['init'])
    .it('ensures .env file exists', () => {
      expect(fs.existsSync('.env')).to.be.true
    })

})

describe('init', () => {
  test
    .stdout()
    .command(['init'])
    .it('init succeeds with success message', ctx => {
      expect(ctx.stdout).to.contain('success')
    })
})
