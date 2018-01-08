const test = require('ava')
const getCommit = require('../lib/getCommit')

test('Retornando tipo e mensagem do usuário em um comando', t => {
  let commit = { type: 'feat', message: 'mensagem digitada pelo usuário' }
  let message = getCommit(commit)
  let result = 'git commit -m "feat: mensagem digitada pelo usuário"'
  
  t.is(message, result);
});