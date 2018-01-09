const test = require('ava')
const commitMessage = require('../lib/commitMessage')

test('commitMessage é uma função', t => {
  let fn = typeof commitMessage
  let result = 'function'

  t.is(fn, result);
})

test('commitMessage retuna uma promise com o stdout do comando', async t => {
  let fn = await commitMessage('echo test is awesome')
  let result = 'test is awesome\n'

  t.is(fn, result);
})