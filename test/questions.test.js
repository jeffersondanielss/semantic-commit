const test = require('ava')
const {pt, en} = require('../src/questions')

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