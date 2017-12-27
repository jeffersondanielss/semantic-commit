const test = require('ava')
const resolveArgs = require('../src/resolveArgs')

test('resolveArgs é uma função', t => {
  let fn = typeof resolveArgs
  let result = 'function'

  t.is(fn, result);
})