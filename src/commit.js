const inquirer = require('inquirer')
const commitMessage = require('./commitMessage')
const questions = require('./questions')

const commit = lang => {
  inquirer
    .prompt(lang ? questions.pt : questions.en)
    .then(
      answers => commitMessage(answers.type, answers.message),
      err => console.log('Error: ', err)
    )
}

module.exports = commit
