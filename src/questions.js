const en = [
  {
    type: 'list',
    name: 'type',
    message: 'Choose the type of the commit:',
    choices: ['chore', 'docs', 'feat', 'fix', 'refactor', 'style', 'test'],
    default: 'fix'
  },

  {
    type: 'input',
    name: 'message',
    message: 'Write the commit message:'
  }
]

const pt = [
  {
    type: 'list',
    name: 'type',
    message: 'Escolha o tipo do commit:',
    choices: ['tarefa', 'documentação', 'funcionalidade', 'correção', 'refatoração', 'estilo', 'teste'],
    default: 'correção'
  },

  {
    type: 'input',
    name: 'message',
    message: 'Escreva a mensagem do commit:'
  }
]

module.exports = { pt, en }
