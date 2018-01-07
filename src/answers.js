// @flow

const inquirer = require('inquirer')
const { pt, en } = require('./questions')

/**
 * Question the user the type and message of the commit and execute it
 */

const answers = (lang?: string): Promise<any> => {
  return new Promise(function(resolve, reject){
    inquirer
      .prompt(lang ? pt : en)
      .then(
        resp => resolve(resp),
        err => reject(err)
      )
  })
}

module.exports = answers
