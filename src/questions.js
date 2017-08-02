const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Escolha o tipo do commit:',
    choices: ['chore', 'docs', 'feat', 'fix', 'refactor', 'style', 'test'],
    default: 'Bug'
  },

  {
    type: 'input',
    name: 'message',
    message: 'Escreva a mensagem do seu commit:'
  }
  
]

module.exports = questions