//@flow

const { execSync } = require('child_process')

/**
 * Executa um comando bash e retorna a output
 * 
 * @param {string} commit - comando para registrar um commit no git
 * @returns {string} output do commando bash
 */

const commitMessage = (commit: string): string =>
  execSync(commit).toString()

module.exports = commitMessage
