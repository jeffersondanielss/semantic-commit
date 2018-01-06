// @flow

/**
 * Create the commit command in git
 * 
 * @returns {string}
 */

const getCommit = (type: string, message: string) =>
  `git commit -m "${type}: ${message}"`

module.exports = getCommit
