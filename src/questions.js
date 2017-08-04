const questions = [
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

module.exports = questions