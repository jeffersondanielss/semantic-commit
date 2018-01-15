// @flow

const inquirer = require('inquirer')
const { pt, en } = require('./questions')

/**
 * Recebe o tipo de commit e uma mensagem do usuário
 * 
 * @param {string} lang - Linguagem usada
 * @return {Promise} tipo de commit e uma mensagem
 */


type commit = {
  type: string,
  message: string
}

const answers = (lang?: string): Promise<commit> =>
  inquirer
    .prompt(lang ? pt : en)

module.exports = answers
