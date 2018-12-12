import {expect, test} from '@oclif/test'
import * as fs from 'fs'

describe('create with .env file', () => {
  test
    .stdout()
    .command(['create'])
    .it('ensures .env file exists', () => {
      expect(fs.existsSync('.env')).to.be.true
    })
})

describe('create success message', () => {
  test
    .stdout()
    .command(['create'])
    .it('succeeds with success message', ctx => {
      expect(ctx.stdout).to.contain('success')
    })
})
