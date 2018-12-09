import {expect, test} from '@oclif/test'

describe('init', () => {
  test
    .stdout()
    .command(['init'])
    .it('runs init', ctx => {
      expect(ctx.stdout).to.contain('file not found')
    })

})
