// @flow

/**
 * Create the commit command in git
 * 
 */

type commit = {
  type: string,
  message: string
}

const getCommit = ({ type, message }: commit): string =>
  `git commit -m "${type}: ${message}"`

module.exports = getCommit
