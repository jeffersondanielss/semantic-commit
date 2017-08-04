import test from 'ava'

const questions = require('./src/questions')
const getCommit = require('./src/getCommit')

test('Nome da lista de commits', t => {
  const message = questions[0].name
  const result = 'type'
  
  t.is(message, result);
});

test('Lista de opções de commits', t => {
  const message = questions[0].type
  const result = 'list'
  
  t.is(message, result);
});

test('formato de escolhas dos commits', t => {
  const message = Array.isArray(questions[0].choices)
  const result = true
  
  t.is(message, result);
});

test('Nome do input que recebe a mensagem do commit', t => {
  const message = questions[1].name
  const result = 'message'
  
  t.is(message, result);
});

test('Retornando tipo e mensagem do usuário em um comando', t => {
  const message = getCommit('feat', 'mensagem digitada pelo usuário')
  const result = 'git commit -m "feat: mensagem digitada pelo usuário"'
  
  t.is(message, result);
});