// @flow

const inquirer = require('inquirer')
const { pt, en } = require('./questions')

/**
 * Question the user the type and message of the commit and execute it
 */


type commit = {
  type: string,
  message: string
}

const answers = (lang?: string): Promise<commit> =>
  inquirer
    .prompt(lang ? pt : en)

module.exports = answers
