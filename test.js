const test = require('ava')
const path = require('path')
const { exec } = require('child_process')
const pkg = require(path.join(__dirname, './package.json'))

const help = require('./src/help')
const {pt, en} = require('./src/questions')
const getCommit = require('./src/getCommit')

test('Nome da lista de commits', t => {
  let message = en[0].name
  let messagePt = pt[0].name
  let result = 'type'
  
  t.is(message, result);
  t.is(messagePt, result);
});

test('Lista de opções de commits', t => {
  let message = en[0].type
  let messagePt = pt[0].type
  let result = 'list'
  
  t.is(message, result);
  t.is(messagePt, result);
});

test('formato de escolhas dos commits', t => {
  let message = Array.isArray(en[0].choices)
  let messagePt = Array.isArray(pt[0].choices)
  let result = true
  
  t.is(message, result);
  t.is(messagePt, result);
});

test('Nome do input que recebe a mensagem do commit', t => {
  let message = en[1].name
  let messagePt = pt[1].name
  let result = 'message'
  
  t.is(message, result);
  t.is(messagePt, result);
});

test('Retornando tipo e mensagem do usuário em um comando', t => {
  let message = getCommit('feat', 'mensagem digitada pelo usuário')
  let result = 'git commit -m "feat: mensagem digitada pelo usuário"'
  
  t.is(message, result);
});

test('Retorna versão do projeto', t => {
  let version = require('./src/getVersion')()
  let result = pkg.version

  t.is(version, result);
})

test.todo('Filtro de parâmetros passados')