// @flow

const inquirer = require('inquirer')
const commitMessage = require('./commitMessage')
const { pt, en } = require('./questions')

/**
 * Question the user the type and message of the commit and execute it
 */

const commit = (lang: string) => {
  inquirer
    .prompt(lang ? pt : en)
    .then(
      ({ type, message }) => commitMessage(type, message),
      err => console.log('Error: ', err)
    )
}

module.exports = commit
