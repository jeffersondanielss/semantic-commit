const test = require('ava')
const path = require('path')
const pkg = require(path.join(__dirname, '../package.json'))

test('Retorna versão do projeto', t => {
  let version = require('../lib/getVersion')()
  let result = pkg.version

  t.is(version, result);
})