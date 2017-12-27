const test = require('ava')
const getCommit = require('../src/getCommit')

test('Retornando tipo e mensagem do usuário em um comando', t => {
  let message = getCommit('feat', 'mensagem digitada pelo usuário')
  let result = 'git commit -m "feat: mensagem digitada pelo usuário"'
  
  t.is(message, result);
});