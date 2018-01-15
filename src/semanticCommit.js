// @flow

const inquirer = require('inquirer')
const answers = require('./answers')
const getCommit = require('./getCommit')
const commitMessage = require('./commitMessage')

/**
 * Pergunta ao usuário tipo e mensagem e gera um novo commit.
 * 
 * @param {string} lang - linguagem a ser exibida
 * @returns {Promise} output do commit no git
 */

const semanticCommit = async (lang?: string): Promise<string> => {
  const answer = await answers(lang)
  const commit = await getCommit(answer)
  const stdout = await commitMessage(commit)

  return stdout
}

module.exports = semanticCommit
