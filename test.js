const test = require('ava')
const questions = require('./src/questions')
const getCommit = require('./src/getCommit')
const { exec } = require('child_process')
const help = require('./src/help')

test('Nome da lista de commits', t => {
  let message = questions[0].name
  let result = 'type'
  
  t.is(message, result);
});

test('Lista de opções de commits', t => {
  let message = questions[0].type
  let result = 'list'
  
  t.is(message, result);
});

test('formato de escolhas dos commits', t => {
  let message = Array.isArray(questions[0].choices)
  let result = true
  
  t.is(message, result);
});

test('Nome do input que recebe a mensagem do commit', t => {
  let message = questions[1].name
  let result = 'message'
  
  t.is(message, result);
});

test('Retornando tipo e mensagem do usuário em um comando', t => {
  let message = getCommit('feat', 'mensagem digitada pelo usuário')
  let result = 'git commit -m "feat: mensagem digitada pelo usuário"'
  
  t.is(message, result);
});

test.todo('Retorna versão do projeto')
test.todo('Retorna ajuda caso usuário digite um comando inválido')
test.todo('Retorna ajuda caso usuário digite o comando --help')