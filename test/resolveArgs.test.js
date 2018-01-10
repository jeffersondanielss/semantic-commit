const test = require('ava')
const { resolveArgs } = require('../lib/resolveArgs')
const getVersion = require('../lib/getVersion')
const help = require('../lib/help')


test('é uma função', t => {
  let fn = typeof resolveArgs
  let result = 'function'

  t.is(fn, result);
})

test('recebendo argumento "-v" exibe a versão da lib', async t => {
  let fn = await resolveArgs('-v')
  let result = await getVersion();

  t.is(fn, result);
})

test('recebendo argumento "-h" exibe ajuda', async t => {
  let fn = await resolveArgs('-h')
  let result = await help();

  t.is(fn, result);
})

test('recebendo um argumento não existente exibe ajuda', async t => {
  let fn = await resolveArgs('--argumentoErrado')
  let result = await help();

  t.is(fn, result);
})