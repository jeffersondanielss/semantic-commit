// @flow

/**
 * Create the commit command in git
 * 
 * @param {string} type - tipo do commit
 * @param {string} message - mensagem do commit
 * @returns {string} comando para registrar um novo commit no git
 */

type commit = {
  type: string,
  message: string
}

const getCommit = ({ type, message }: commit): string =>
  `git commit -m "${type}: ${message}"`

module.exports = getCommit
