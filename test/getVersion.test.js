const test = require('ava')
const path = require('path')
const pkg = require(path.join(__dirname, '../package.json'))
const getVersion = require('../lib/getVersion')

test('Retorna versão do projeto', async t => {
  let version = await getVersion()
  let result = pkg.version

  t.is(version, result);
})