const inquirer = require('inquirer')
const commitMessage = require('./commitMessage')
const questions = require('./questions')

const commit = () => {
  inquirer
    .prompt(questions)
    .then(
      answers => commitMessage(answers.type, answers.message),
      err => console.log('Error: ', err)
    )
}

module.exports = commit
